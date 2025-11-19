import { useEffect, useState } from 'react';
import BottomButtonRoundedWithSeperator from '../../components/box/BottomButtonRoundedWithSeperator';
import SectionLayout from '../../ui/SectionLayout';
import HelpCenterHero from './HelpCenterHero';
import BodyBase from '@/components/text/BodyBase';
import { getHelpCenterPosts } from '@/services/pages';
import ContactForm from '@/pages/help-center/ContactForm';
export const helpCenterArticles = [
  {
    title: 'About Fundrise',
    text: 'What we do, how we’re different, and how you can contact us.',
  },
  {
    title: 'Getting started',
    text: 'Learn more about investing on Fundrise, and what to expect.',
  },
  {
    title: 'Our investments',
    text: 'Get to know the investments that make up a Fundrise portfolio.',
  },
  {
    title: 'Returns',
    text: 'Learn more about client performance and real-time returns.',
  },
  {
    title: 'Account management',
    text: 'Here’s what you need to know about navigating your dashboard.',
  },
  {
    title: 'Retirement Accounts',
    text: 'Learn more about investing through a retirement account (IRA).',
  },
  {
    title: 'Liquidations',
    text: 'Information on how to liquidate all or a portion of your shares.',
  },
  {
    title: 'Fundrise IPO',
    text: 'Information on the Fundrise IPO, eligibility, liquidity, and funding.',
  },
  {
    title: 'Taxes',
    text: 'Find answers to the most common tax filing questions.',
  },
];

function HelpCenter() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getHelpCenterPosts(search);
        setPosts(response.result.posts);
        setIsError(null);
      } catch (err) {
        setIsError(err.message || 'An error occurred while fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    if (search.length === 0 || search.length > 2) fetchData();
  }, [search]);
  return (
    <>
      <HelpCenterHero search={search} setSearch={setSearch} />
      <SectionLayout>
        {!isLoading && !isError && (
          <div className="w-full grid sm:grid-cols-2 tab:grid-cols-3 items-stretch justify-normal gap-8">
            {posts.map((item, idx) => (
              <BottomButtonRoundedWithSeperator
                slug={item.slug}
                key={idx}
                text={item.excerpt}
                title={item.title}
              />
            ))}
          </div>
        )}
        {isLoading && <BodyBase>Loading posts....</BodyBase>}
        {isError && <BodyBase>Something went wrong!</BodyBase>}
      </SectionLayout>
      <ContactForm />
    </>
  );
}

export default HelpCenter;
