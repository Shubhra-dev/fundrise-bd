import { useEffect, useState } from 'react';
import BodyBase from '../../components/text/BodyBase';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import AnnualReturnsTable from './AnnualReturnsTable';
import { getHistoricalData } from '@/services/pages';
import { GrDocumentVerified } from 'react-icons/gr';
import { BiError } from 'react-icons/bi';

function HistoricalAbility() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getHistoricalData();
        setData(response.result);
      } catch (err) {
        setError(err.message || 'Failed to fetch historical data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistoricalData();
  }, []);
  if (isLoading) {
    return (
      <SectionLayout bg={`bg-bg-primary`}>
        <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
          <div className="animate-spin text-4xl">
            <GrDocumentVerified className="text-primary" />
          </div>
          <Title className="text-center">Loading Historical Data</Title>
          <SubHeading className="text-center">
            Please wait while we fetch the information
          </SubHeading>
        </div>
      </SectionLayout>
    );
  }

  if (error) {
    return (
      <SectionLayout bg={`bg-bg-primary`}>
        <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
          <div className="animate-pulse text-4xl">
            <BiError className="text-red-500" />
          </div>
          <Title className="text-center text-red-600">Error Loading Data</Title>
          <SubHeading className="text-center text-red-500">{error}</SubHeading>
        </div>
      </SectionLayout>
    );
  }

  return (
    <SectionLayout bg={`bg-bg-primary`}>
      <div className="w-full flex flex-col tab:flex-row items-start justify-normal gap-24">
        <div className="w-full tab:w-3/5">
          <SubHeading extraClass={`uppercase mb-[15px]`} tracking={`tracking-widest`}>
            historical stability
          </SubHeading>
          <Title>{data?.title || 'How Fundrise compares to public REITs'}</Title>
          <BodyBase fontWeight={`font-normal`} extraClass={`pt-2.5`}>
            {data?.description ||
              'Private real estate has historically shown less volatility compared to public REITs (real estate investment trusts). While public REITs are subject to market and sentiment-driven fluctuations, private real estate has been steady in comparison — exhibiting more smooth and gradual growth overall.'}
          </BodyBase>
        </div>
        <div className="w-full tab:w-2/5">
          <AnnualReturnsTable data={data?.annual_returns} />
        </div>
      </div>
      <div className="mt-10">
        <CaptionExtraSmall align={`text-center`}>
          {data?.disclaimer ||
            'Learn more about the assumptions in this section. The foregoing performance information is presented solely with regard to the advisory client performance of the clients of Fundrise Advisors, LLC pursuant to the Investment Advisers Act of 1940, and does not represent the performance of any individual investor or any individual or aggregate performance of any funds with offerings qualified pursuant Regulation A of the Securities Act (the "Regulation A Funds"). For more information about the Regulation A Funds, and their corresponding Forms 1-A, including their individual performance information, please click here.'}
        </CaptionExtraSmall>
      </div>
    </SectionLayout>
  );
}

export default HistoricalAbility;
