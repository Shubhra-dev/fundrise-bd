import { useState, useEffect, useCallback } from 'react';
import SubHeading from '@/components/text/SubHeading';
import NewsCard from '@/pages/user-dashboard/NewsCard';
import CaptionSmall from '@/components/text/CaptionSmall';
import Title from '@/components/text/Title';
import RoundedButton from '@/components/buttons/RoundedButton';
import { getDashboardNewsfeedData } from '@/services/dashboard';

function Newsfeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Safer shape: expect { posts: [] } from API, but guard anyway
  const [newsData, setNewsData] = useState({ posts: [] });

  const fetchNewsData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getDashboardNewsfeedData();

      // Be defensive about shape
      const result = response?.result || {};
      const posts = Array.isArray(result.posts) ? result.posts : [];

      setNewsData({ ...result, posts });
    } catch (err) {
      console.error('Failed to load newsfeed:', err);
      setError(err?.message || 'Failed to load news feed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData]);

  if (isLoading) {
    return (
      <div className="my-6 w-full flex flex-col items-center justify-center min-h-[40vh]">
        <div className="w-16 h-16 relative">
          <div className="w-full h-full border-4 border-icon-brand-3 rounded-full animate-spin border-t-transparent" />
        </div>
        <CaptionSmall textColor="text-sub-heading" extraClass="mt-4">
          Loading news feed...
        </CaptionSmall>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-6 w-full flex flex-col items-center justify-center min-h-[40vh]">
        <div className="w-full max-w-md rounded-[10px] border border-error p-6 bg-error/5">
          <Title extraClass="text-error text-center mb-2">Oops!</Title>
          <CaptionSmall textColor="text-sub-heading" extraClass="text-center">
            We couldn&apos;t load your news feed. Please try again.
          </CaptionSmall>
          <CaptionSmall textColor="text-sub-heading" extraClass="text-center mt-1 opacity-70">
            ({error})
          </CaptionSmall>
          <RoundedButton variant="primary" extraClass="mt-4 mx-auto" onClick={fetchNewsData}>
            Try Again
          </RoundedButton>
        </div>
      </div>
    );
  }

  const posts = newsData?.posts ?? [];

  if (!posts.length) {
    return (
      <div className="my-6 w-full">
        <SubHeading>Newsfeed</SubHeading>
        <div className="mt-6 w-full flex flex-col items-center justify-center rounded-[10px] border border-border-primary p-6 bg-bg-primary-2/40">
          <CaptionSmall textColor="text-sub-heading" extraClass="text-center">
            There are no updates to show right now. Check back later for new insights and market
            commentary.
          </CaptionSmall>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 w-full">
      <SubHeading>Newsfeed</SubHeading>
      <div className="mt-6 w-full flex flex-col items-start justify-normal gap-6">
        {posts.map((item, index) => (
          <NewsCard
            key={item.id || item.slug || index}
            title={item.title}
            slug={item.slug}
            badge={item.category_name}
            summary={item.excerpt}
            image={item.featured_image}
            imageAlt="blog image"
            strategy={item.strategy}
            starCount={item.starCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Newsfeed;
