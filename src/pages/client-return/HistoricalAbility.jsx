import BodyBase from '../../components/text/BodyBase';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import AnnualReturnsTable from './AnnualReturnsTable';
function HistoricalAbility() {
  return (
    <SectionLayout bg={`bg-bg-primary`}>
      <div className="w-full flex flex-col tab:flex-row items-start justify-normal gap-24">
        <div className="w-full tab:w-3/5">
          <SubHeading extraClass={`uppercase mb-[15px]`} tracking={`tracking-widest`}>
            historical stability
          </SubHeading>
          <Title>How Fundrise compares to public REITs</Title>
          <BodyBase fontWeight={`font-normal`} extraClass={`pt-2.5`}>
            Private real estate has historically shown less volatility compared to public REITs
            (real estate investment trusts). While public REITs are subject to market and
            sentiment-driven fluctuations, private real estate has been steady in comparison —
            exhibiting more smooth and gradual growth overall.
          </BodyBase>
        </div>
        <div className="w-full tab:w-2/5">
          <AnnualReturnsTable />
        </div>
      </div>
      <div className="mt-10">
        <CaptionExtraSmall align={`text-center`}>
          Learn more about the assumptions in this section. The foregoing performance information is
          presented solely with regard to the advisory client performance of the clients of Fundrise
          Advisors, LLC pursuant to the Investment Advisers Act of 1940, and does not represent the
          performance of any individual investor or any individual or aggregate performance of any
          funds with offerings qualified pursuant Regulation A of the Securities Act (the
          "Regulation A Funds"). For more information about the Regulation A Funds, and their
          corresponding Forms 1-A, including their individual performance information, please
          click here.
        </CaptionExtraSmall>
      </div>
    </SectionLayout>
  );
}

export default HistoricalAbility;
