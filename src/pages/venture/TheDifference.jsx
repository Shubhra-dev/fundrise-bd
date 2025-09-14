import FullshadowCard from '../../components/card/FullshadowCard';
import BodySmall from '../../components/text/BodySmall';
import CaptionBase from '../../components/text/CaptionBase';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';

function TheDifference() {
  return (
    <SectionLayout bg={`bg-bg-soft-orchid-light`}>
      <div className="flex flex-col tab:flex-row items-start justify-normal gap-24">
        <div className="tab:w-1/2">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            the fundrise difference
          </SubHeading>
          <Title extraClass={`mt-[15px] mb-2.5`}>
            <span className="text-btext-1-base">Founders</span> and engineers
          </Title>
          <BodySmall>
            With growth equity investing, it’s harder to participate in blue-chip private funding
            rounds than it is to identify the blue-chip companies. However, we believe Fundrise has
            a distinct advantage in the crowded space of venture funding.
          </BodySmall>
        </div>
        <div className="tab:w-1/2 flex flex-col gap-[25px]">
          <FullshadowCard
            text={`Our decades of first-hand experience building and operating tech companies gives us a deep understanding of the daily challenges and trade-offs a growing company faces. With over 100 software engineers and product managers on staff, we have more software depth and expertise than most venture funds.`}
            title={`Technical expertise`}
          />
          <FullshadowCard
            text={`As the largest direct-to-investor alternative asset manager in the country, we offer portfolio companies in-app exposure to nearly 2 million people—many of whom work in technology. Not only can this potentially drive new customers, recruiting, brand recognition, and near-term revenue for our portfolio companies, it can also provide critical name recognition for when it’s time to IPO.`}
            title={`Extensive reach`}
          />
          <FullshadowCard
            text={`We’ve engineered our investment infrastructure to enable us to be the most patient and passive source of capital on the market, eliminating any incentive to meddle with a founder/CEO’s long-term vision for the sake of our own short-term image or profits.`}
            title={`Patient and passive capital`}
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default TheDifference;
