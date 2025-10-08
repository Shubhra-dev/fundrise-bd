import BottomButtonRoundedWithSeperator from '../../components/box/BottomButtonRoundedWithSeperator';
import RoundedButton from '../../components/buttons/RoundedButton';
import BodySmall from '../../components/text/BodySmall';
import Heading from '../../components/text/Heading';
import SectionLayout from '../../ui/SectionLayout';
import HelpCenterHero from './HelpCenterHero';
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
  return (
    <>
      <HelpCenterHero />
      <SectionLayout>
        <div className="w-full grid sm:grid-cols-2 tab:grid-cols-3 items-stretch justify-normal gap-8">
          {helpCenterArticles.map((item, idx) => (
            <BottomButtonRoundedWithSeperator key={idx} text={item.text} title={item.title} />
          ))}
        </div>
      </SectionLayout>
    </>
  );
}

export default HelpCenter;
