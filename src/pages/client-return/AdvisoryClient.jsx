import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import AdvisoryReturnsChart from './AdvisoryReturnsChart';
function AdvisoryClient() {
  return (
    <SectionLayout>
      <div className="w-full tab:w-[75%] pb-8">
        <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
          advisory client performance
        </SubHeading>
        <Title>
          <span className="text-btext-3-dark">Consistent growth</span> over time
        </Title>
        <BodyBase fontWeight={`font-normal`} extraClass={`pt-2.5`}>
          Fundrise investments are intended to be held long-term, as private investment funds take
          time to generate value. The data below supports the strategy that time on platform can
          significantly compound earnings, ultimately yielding the best returns for those who invest
          with a long-term perspective.
        </BodyBase>
      </div>
      <AdvisoryReturnsChart />
    </SectionLayout>
  );
}

export default AdvisoryClient;
