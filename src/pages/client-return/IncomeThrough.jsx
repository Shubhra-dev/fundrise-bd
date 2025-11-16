import SectionLayout from '../../ui/SectionLayout';
import RealEstateHero from '../../assets/RealEstateHero.jpg';
import SubTitle from '../../components/text/SubTitle';
import BodySmall from '../../components/text/BodySmall';
import InvestmentTable from './InvestmentTable';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
function IncomeThrough({ data }) {
  return (
    <SectionLayout>
      <div className="flex items-center justify-normal gap-[52px]">
        <div className="tab:w-1/2">
          <SubTitle>Income through dividends</SubTitle>
          <BodySmall extraClass={`mt-2.5`}>
            Real estate allows investors to accrue a unique mix of both long-term appreciation and
            income potential. The figures here represent the income portion of advisory client
            returns through Fundrise and do not include appreciation over time.
          </BodySmall>
          <div className="my-10">
            <InvestmentTable data={data?.income_through_dividends} />
          </div>
          <div className="bg-bg-primary-2 w-full rounded-md py-7 px-5">
            <SubTitle align={`text-center`}>
              <span className="text-btext-3-base">$</span>
              {data?.net_distributions_earned_by_advisory_clients}
            </SubTitle>
            <CaptionExtraSmall
              textColor={`text-heading`}
              align={`text-center`}
              extraClass={`mt-1.5`}
            >
              Cumulative net distributions earned by advisory clients
            </CaptionExtraSmall>
          </div>
        </div>
        <img
          src={RealEstateHero}
          alt="photo"
          className="hidden tab:block tab:h-[500px] tab:w-1/2 chamfer-tr-5 rounded-md"
        />
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

export default IncomeThrough;
