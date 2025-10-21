import BodyBase from '@/components/text/BodyBase';
import DashboardLayout from '@/pages/user-dashboard/DashboardLayout';
import NewsCard from '@/pages/user-dashboard/NewsCard';
import { BiCaretDown } from 'react-icons/bi';
import Blog5 from '@assets/Blog5.png';
import Blog6 from '@assets/Blog6.png';
import Blog1 from '@assets/Blog1.png';
import Blog2 from '@assets/Blog2.png';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
const newsCards = [
  {
    name: 'Featured News',
    item: [
      {
        id: 'pu-1',
        badge: 'Feature Update',
        title: 'Positive performance continues through first',
        summary:
          'Strong fundamentals and continued operating rigor resulted in yet another quarter of positive returns across all three primary asset classes.',
        strategy: null,
        starCount: 2,
        img: Blog5,
        imageAlt: 'Abstract collage with houses and circular graphic',
      },
      {
        id: 'na-1',
        badge: 'New Acquisition',
        title: 'Portfolio update: New preferred equity investment',
        summary:
          'New high-yield investment with a 14.00% fixed return in a 290-unit multifamily development in Anna, TX.',
        strategy: 'Fixed Income',
        starCount: 1,
        img: Blog6,
        imageAlt: 'Neighborhood at sunset with houses and cars',
      },
    ],
  },
  {
    name: 'April 2025',
    item: [
      {
        id: 'pu-1',
        badge: 'Performance Update',
        title: 'Outperformance amidst market uncertainty',
        summary:
          'Strong operating performance resulted in generally positive returns for the first quarter of 2025 across real estate, credit, and venture capital.',
        strategy: null,
        starCount: 0,
        img: Blog1,
        imageAlt: 'Abstract collage with houses and circular graphic',
      },
    ],
  },
  {
    name: 'January 2025',
    item: [
      {
        id: 'pu-2',
        badge: 'Performance Update',
        title: 'The case for real estate in 2025',
        summary:
          'In our annual letter to investors, we discuss how falling interest rates over the course of the year kicked off what we expect to be an extended period...',
        strategy: null,
        starCount: 0,
        img: Blog2,
        imageAlt: 'House with chart overlay on blue background',
      },
    ],
  },
];

function FilterItem({ title }) {
  return (
    <div className="relative w-full">
      <select className="px-5 w-full py-[15px] appearance-none border border-border-primary rounded-md">
        <option className="text-sub-heading font-normal text-base" value="">
          {title}
        </option>
      </select>
      <BiCaretDown className="absolute text-black text-xl right-2 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}

function UserNewsFeed() {
  return (
    <DashboardLayout activeTab={5}>
      <div className="flex flex-col-reverse sm:flex-row items-start justify-normal gap-10 mt-2">
        <div className="w-full sm:w-2/3 tab:w-3/4">
          {newsCards.map((card) => (
            <div key={card.name} className="mb-8">
              <BodyBase textColor={`text-sub-heading`} extraClass={`mb-4`}>
                {card.name}
              </BodyBase>
              <div className="flex flex-col gap-5">
                {card.item.map((item) => (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    badge={item.badge}
                    summary={item.summary}
                    image={item.img}
                    imageAlt={item.imageAlt}
                    strategy={item.strategy}
                    starCount={item.starCount}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full sm:w-1/3 tab:w-1/4 pr-4">
          <div className="mt-2.5 flex flex-col gap-[15px]">
            <BodyBase textColor={`text-sub-heading`}>Filter by:</BodyBase>
            <FilterItem title={'Recent Activity'} />
            <FilterItem title={'Select Month'} />
            <FilterItem title={'Select Year'} />
          </div>
        </div>
      </div>
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
