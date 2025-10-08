import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import GradientSeperatorTextBox from './GradientSeperatorTextBox';
function InvestorAlignment() {
  return (
    <SectionLayout>
      <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
        investor first alignment
      </SubHeading>
      <Title extraClass={`mt-[15px] sm:w-[90%] tab:w-[85%]`}>
        We’ve aligned our
        <span className="text-btext-3-base-dark"> long-term interests</span> with the interests with
        the interests of our investors
      </Title>
      <div className="mt-[60px] grid sm:grid-cols-2 tab:grid-cols-3 items-stretch justify-normal gap-7">
        <GradientSeperatorTextBox
          text={`We've eliminated the typical "promote" or "carried interest" performance based fees from our funds open to everyday investors. These fees usually lead to short term decision making and excessive risk taking.`}
          title={`No performance fees`}
        />
        <GradientSeperatorTextBox
          text={`Fundrise manages a series of funds including Publicly Registered '40 Act Funds and SEC Qualified Regulation A Fund, both of which must provide publicly audited financial statements on an annual basis.`}
          title={`Transparency in reporting`}
        />
        <GradientSeperatorTextBox
          text={`Rather than take traditional VC backing, we’ve created a unique model whereby investors on the platform can become owners of Fundrise, the company, through our iPO (internet public offering).`}
          title={`Investor owned`}
        />
      </div>
    </SectionLayout>
  );
}

export default InvestorAlignment;
