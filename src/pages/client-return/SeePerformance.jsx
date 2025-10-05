import BodySmall from '../../components/text/BodySmall';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import TextBoxIcon from './TextBoxIcon';
function SeePerformance() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-col sm:flex-row items-center justify-normal gap-5 sm:gap-16 tab:gap-[88px]">
        <SubTitle extraClass={`w-full sm:w-1/2 tab:w-1/3`} fontWeight={`font-bold`}>
          See performance by fund
        </SubTitle>
        <BodySmall extraClass={`w-full sm:w-1/2 tab:w-2/3`}>
          These publicly registered funds are our largest and most diversified, and are akin to
          mutual funds of alternative assets.
        </BodySmall>
      </div>
      <div className="mt-[45px] grid tab:grid-cols-3 items-stretch justify-normal gap-5">
        <TextBoxIcon
          text={`Aims to give all investors the opportunity to invest in a portfolio of top-tier private
          technology companies before they IPO.`}
          title={`Innovation Fund`}
          tag={`Venture`}
        />
        <TextBoxIcon
          bg="bg-bg-soft-orchid-dark"
          text={`An opportunistic strategy for income-focused investors that capitalizes on today’s lending environment.`}
          title={`Income Fund`}
          tag={`Private credit`}
        />
        <TextBoxIcon
          text={`Designed to deliver long-term appreciation from a diversified portfolio of our most favored real estate investment strategies.`}
          title={`Flagship Fund`}
          tag={`Real estate`}
        />
      </div>
    </SectionLayout>
  );
}

export default SeePerformance;
