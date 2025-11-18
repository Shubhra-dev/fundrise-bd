import BodyBase from '@/components/text/BodyBase';
import DashboardLayout from '@/pages/user-dashboard/DashboardLayout';
import NewsCard from '@/pages/user-dashboard/NewsCard';
import { BiCaretDown, BiErrorCircle } from 'react-icons/bi';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import { useState, useEffect } from 'react';
import Heading from '@/components/text/Heading';
import BodySmall from '@/components/text/BodySmall';
import { getUserNewsfeed } from '@/services/posts';

const monthOptions = [
  { name: 'January', value: 1 },
  { name: 'February', value: 2 },
  { name: 'March', value: 3 },
  { name: 'April', value: 4 },
  { name: 'May', value: 5 },
  { name: 'June', value: 6 },
  { name: 'July', value: 7 },
  { name: 'August', value: 8 },
  { name: 'September', value: 9 },
  { name: 'October', value: 10 },
  { name: 'November', value: 11 },
  { name: 'December', value: 12 },
];

function FilterItem({ title, value, onChange, options }) {
  return (
    <div className="relative w-full">
      <select
        className="px-5 w-full py-[15px] appearance-none border border-border-primary rounded-md"
        value={value}
        onChange={onChange}
      >
        <option className="text-sub-heading font-normal text-base" value="">
          {title}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name || option}
          </option>
        ))}
      </select>
      <BiCaretDown className="absolute text-black text-xl right-2 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}

function UserNewsFeed() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchNewsfeed = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await getUserNewsfeed({ month, year });
        if (response.success) {
          setData(response.result);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsfeed();
  }, [month, year]);

  if (isLoading) {
    return (
      <DashboardLayout activeTab={5}>
        <div className="flex justify-center items-center h-full">
          <Heading>Loading...</Heading>
        </div>
      </DashboardLayout>
    );
  }

  if (isError) {
    return (
      <DashboardLayout activeTab={5}>
        <div className="flex justify-center items-center h-full">
          <BiErrorCircle className="text-red-500 text-4xl mr-2" />
          <BodySmall>Something went wrong. Please try again later.</BodySmall>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activeTab={5}>
      <div className="flex flex-col-reverse sm:flex-row items-start justify-normal gap-10 mt-2">
        <div className="w-full sm:w-2/3 tab:w-3/4">
          {data?.featured && (
            <div className="mb-8">
              <BodyBase textColor={`text-sub-heading`} extraClass={`mb-4`}>
                Featured News
              </BodyBase>
              <div className="flex flex-col gap-5">
                {data.featured.map((item) => (
                  <NewsCard
                    key={item.id}
                    slug={item.slug}
                    title={item.title}
                    badge={item.category_name}
                    summary={item.excerpt}
                    image={item.featured_image}
                    imageAlt={item.title}
                    strategy={null}
                    starCount={0}
                  />
                ))}
              </div>
            </div>
          )}

          {data?.groups?.map((group) => (
            <div key={group.group_title} className="mb-8">
              <BodyBase textColor={`text-sub-heading`} extraClass={`mb-4`}>
                {group.group_title}
              </BodyBase>
              <div className="flex flex-col gap-5">
                {group.posts.map((post) => (
                  <NewsCard
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    badge={post.category_name}
                    summary={post.excerpt}
                    image={post.featured_image}
                    imageAlt={post.title}
                    strategy={null}
                    starCount={0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-1/3 tab:w-1/4 pr-4">
          <div className="mt-2.5 flex flex-col gap-[15px]">
            <BodyBase textColor={`text-sub-heading`}>Filter by:</BodyBase>
            <FilterItem
              title={'Select Month'}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              options={monthOptions}
            />
            <FilterItem
              title={'Select Year'}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              options={[
                { name: '2024', value: 2024 },
                { name: '2025', value: 2025 },
              ]}
            />
          </div>
        </div>
      </div>

      {data?.pagination && (
        <div className="mt-10 py-5 border-t border-t-border-primary flex justify-center">
          <BodySmall>
            Page {data.pagination.current_page} of {data.pagination.last_page}
          </BodySmall>
        </div>
      )}

      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
          All images and return and projection figures shown are for illustrative purposes only, may
          assume additional investments over time, and are not actual Fundrise customer or model
          returns or projections. Past performance is no guarantee of future results. Any historical
          returns, expected returns, or probability projections may not reflect actual future
          performance. All securities involve risk and may result in partial or total loss. While
          the data we use from third parties is believed to be reliable, we cannot ensure the
          accuracy or completeness of data provided by investors or other third parties. Neither
          Fundrise nor any of its affiliates provide tax advice and do not represent in any manner
          that the outcomes described herein will result in any particular tax consequence.
          Prospective investors should confer with their personal tax advisors regarding the tax
          consequences based on their particular circumstances. Neither Fundrise nor any of its
          affiliates assume responsibility for the tax consequences for any investor of any
          investment.{' '}
          <a href="" className="text-btext-1-dark underline">
            Full Disclosure
          </a>{' '}
          <br />
          <br />
          The publicly filed offering circulars of the issuers sponsored by Rise Companies Corp.,
          not all of which may be currently qualified by the Securities and Exchange Commission, may
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks of
          Rise Companies Corp. Proudly designed and coded in Washington, D.C. <br />
          <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks
          of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
        </CaptionExtraSmall>
      </div>
    </DashboardLayout>
  );
}

export default UserNewsFeed;
