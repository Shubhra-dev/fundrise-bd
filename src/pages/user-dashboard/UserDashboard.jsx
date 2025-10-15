import CaptionSmall from '../../components/text/CaptionSmall';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import DashboardLayout from './DashboardLayout';
import AssetValue from '../../assets/AssetValue.png';
import { IoClose, IoLinkSharp } from 'react-icons/io5';
import Blog5 from '../../assets/Blog5.png';
import Blog6 from '../../assets/Blog6.png';
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Send from '../../assets/icons/Send.svg';
import NewsCard from './NewsCard';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import { useState } from 'react';
import RadialProgress from '../../ui/RadialProgress';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import { BiChevronRight } from 'react-icons/bi';
import { LuCircleChevronRight } from 'react-icons/lu';
import PortfolioOverviewCards from './PortfolioOverviewCards';
import Calculator from '../../assets/Calculator.png';
import HelpFAQ from '../../assets/HelpFAQ.png';
import RoundedButton from '../../components/buttons/RoundedButton';
const newsCards = [
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
];

function UserdashBoard() {
  const [copied, setCopied] = useState(false);
  const inviteUrl = 'https://fundrise.com/r?i=pep094';

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(inviteUrl);
      } else {
        // Fallback for older browsers / http contexts
        const ta = document.createElement('textarea');
        ta.value = inviteUrl;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Copy failed:', e);
    }
  };
  return (
    <DashboardLayout activeTab={1}>
      <div className="w-full flex flex-col sm:flex-row items-stretch justify-normal gap-4 mt-10">
        <div className="w-full sm:w-2/3">
          <div className="w-full rounded-[10px] border border-border-primary p-5">
            <CaptionSmall textColor={`text-sub-heading`}>Acoount value</CaptionSmall>
            <Title extraClass={`mt-[14px]`}>$3,000.00</Title>
            <img src={AssetValue} alt="asset value" className="w-36 h-32 m-auto my-11" />
            <CaptionSmall textColor={`text-sub-heading`}>
              Your account value chart will be available a week after order completion. Your
              portfolio is already powered by dozens of properties from across the country.
            </CaptionSmall>
          </div>
          <div className="sm:hidden border border-border-primary rounded-[10px] p-3 tab:p-5 mt-4">
            <div className="flex items-center justify-between mb-4">
              <BodySmall fontWeight={`font-bold`}>Portfolio overview</BodySmall>
              <LuCircleChevronRight />
            </div>
            <PortfolioOverviewCards pct={50} title={'NAVANA Real Estate'} />
            <PortfolioOverviewCards pct={35} title={'Swadesh Real Estate'} />
            <PortfolioOverviewCards pct={15} title={'South Breeze Holdings'} />
          </div>
          <div className="w-full rounded-[10px] bg-bg-primary-2 border border-icon-brand-3 mt-4 p-5">
            <div className="flex items-center justify-between">
              <CaptionSmall textColor={`text-sub-heading`} fontWeight={`font-bold`}>
                Share voucher reward
              </CaptionSmall>
              <IoClose className="text-base" />
            </div>
            <CaptionSmall textColor={`text-sub-heading`} extraClass={`mt-2.5`}>
              Your share voucher reward is pending. Your reward will be visible in your transactions
              tab after the associated order settles.
            </CaptionSmall>
          </div>
          <div className="my-6 w-full">
            <SubHeading>Newsfeed</SubHeading>
            <div className="mt-6 w-full flex flex-col items-start justify-normal gap-6">
              {newsCards.map((item, index) => (
                <NewsCard
                  key={index}
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
        </div>
        <div className="w-full sm:w-1/3">
          <div className="border border-border-primary rounded-[10px] p-5">
            <div className="flex items-center justify-normal gap-5">
              <div className="w-2/3">
                <CaptionSmall fontWeight={`font-bold`} textColor={`text-sub-heading`}>
                  Get $50, Give $50
                </CaptionSmall>
                <CaptionExtraSmall extraClass={`mt-2.5`}>
                  You and your friends can each earn $50 in shares when they invest with your invite
                  link
                </CaptionExtraSmall>
              </div>
              <img src={Send} alt="send" className="w-1/3" />
            </div>
            <div className="mt-[15px] w-full border border-border-tertiary p-[5px] gap-2 tab:gap-7 rounded-md flex flex-col tab:flex-row justify-between items-center">
              <div className="flex items-center justify-normal gap-2">
                <IoLinkSharp className="text-xl" />
                <CaptionExtraSmall textColor={`text-black`}>
                  {inviteUrl.replace(/^https?:\/\//, '')}
                </CaptionExtraSmall>
              </div>
              <button
                onClick={copyToClipboard}
                className="w-full tab:w-max py-2.5 px-[13px] rounded-md bg-bg-dusky-plum-base text-white font-display font-bold text-sm"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <div className="hidden sm:block border border-border-primary rounded-[10px] p-3 tab:p-5 mt-4">
            <div className="flex items-center justify-between mb-4">
              <BodySmall fontWeight={`font-bold`}>Portfolio overview</BodySmall>
              <LuCircleChevronRight />
            </div>
            <PortfolioOverviewCards pct={50} title={'NAVANA Real Estate'} />
            <PortfolioOverviewCards pct={35} title={'Swadesh Real Estate'} />
            <PortfolioOverviewCards pct={15} title={'South Breeze Holdings'} />
          </div>
          <div className="border border-border-primary rounded-[10px] p-5 mt-4">
            <div className="flex items-center justify-normal gap-5">
              <div>
                <CaptionSmall fontWeight={`font-bold`} textColor={`text-sub-heading`}>
                  See your growth potential
                </CaptionSmall>
                <CaptionExtraSmall textColor={`text-sub-heading`}>
                  With $100 monthly investments, your account could be{' '}
                  <span className="block font-bold">$69k by age 67</span>
                </CaptionExtraSmall>
              </div>
              <img src={Calculator} alt="calculator" className="h-20" />
            </div>
            <div className="mt-5">
              <RoundedButton
                label="Calculate Now"
                width="w-max"
                textSize="text-sm"
                padding="py-3 px-6"
              />
            </div>
          </div>
          <div className="border border-border-primary rounded-[10px] p-5 mt-4">
            <div className="flex justify-center mb-4">
              <img src={HelpFAQ} alt="faq" />
            </div>
            <CaptionSmall fontWeight={`font-bold`} textColor={`text-sub0heding`}>
              Help center & FAQ
            </CaptionSmall>
            <CaptionExtraSmall extraClass={`mt-2.5`}>
              Learn more about Fundrise and get answers to our investors' most commonly asked
              questions.
            </CaptionExtraSmall>
            <div className="mt-4">
              <RoundedButton
                label="Learn More"
                width="w-max"
                textSize="text-sm"
                padding="py-3 px-6"
                bg="bg-white"
                hoverBg="hover:bg-btext-1-base/20"
                textColor="text-btext-1-base"
                border="border border-btext-1-base"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
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
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to  © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks of
          Rise Companies Corp. Proudly designed and coded in Washington, D.C.
        </CaptionExtraSmall>
      </div>
    </DashboardLayout>
  );
}

export default UserdashBoard;
