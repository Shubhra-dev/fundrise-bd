import { useEffect, useState } from 'react';
import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import AdvisoryReturnsChart from './AdvisoryReturnsChart';
import { getConsistantGrowth } from '../../services/pages';
import Heading from '@/components/text/Heading';

function AdvisoryClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getConsistantGrowth();
        setData(response.result.consistent_growth);
        setError(null);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SectionLayout>
        <div className="w-full flex flex-col items-center justify-center py-24 space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <Heading extraClass="text-center">Loading...</Heading>
        </div>
      </SectionLayout>
    );
  }

  if (error) {
    return (
      <SectionLayout>
        <div className="w-full flex flex-col items-center justify-center py-24 space-y-4">
          <Heading extraClass="text-error-dark text-center">Oops!</Heading>
          <BodyBase extraClass="text-error-dark text-center">{error}</BodyBase>
        </div>
      </SectionLayout>
    );
  }

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
      <AdvisoryReturnsChart data={data} />
    </SectionLayout>
  );
}

export default AdvisoryClient;
