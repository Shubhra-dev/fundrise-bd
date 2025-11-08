import SubHeading from '@/components/text/SubHeading';
import NewsCard from '@/pages/user-dashboard/NewsCard';
import { useState, useEffect } from 'react';
import CaptionSmall from '@/components/text/CaptionSmall';
import Title from '@/components/text/Title';
import RoundedButton from '@/components/buttons/RoundedButton';
import { getDashboardNewsfeedData } from '@/services/dashboard';

function Newsfeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setIsLoading(true);
        // Replace this with your actual API call
        const response = await getDashboardNewsfeedData();
        setNewsData(response.result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsData();
  }, []);
  if (isLoading) {
    return (
      <div className="my-6 w-full flex flex-col items-center justify-center min-h-[40vh]">
        <div className="w-16 h-16 relative">
          <div className="w-full h-full border-4 border-icon-brand-3 rounded-full animate-spin border-t-transparent"></div>
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
            {error}
          </CaptionSmall>
          <RoundedButton
            variant="primary"
            extraClass="mt-4 mx-auto"
            onClick={() => window.location.reload()}
          >
            Try Again
          </RoundedButton>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 w-full">
      <SubHeading>Newsfeed</SubHeading>
      <div className="mt-6 w-full flex flex-col items-start justify-normal gap-6">
        {newsData.posts.map((item, index) => (
          <NewsCard
            key={item.id || index}
            title={item.title}
            slug={item.slug}
            badge={item.category_name}
            summary={item.excerpt}
            image={item.featured_image}
            imageAlt={'blog image'}
            strategy={item.strategy}
            starCount={item.starCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Newsfeed;
