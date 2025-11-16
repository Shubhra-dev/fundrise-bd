import AdvisoryClient from './AdvisoryClient';
import ClientReturnHero from './ClientReturnHero';
import HistoricalAbility from './HistoricalAbility';
import IncomeThrough from './IncomeThrough';
import LettersToInvestor from './LettersToInvestor';
import SeePerformance from './SeePerformance';
import BetterPortfolio from '../home/BetterPortfolio';
import { useEffect, useState } from 'react';
import { getClientReturnData } from '@/services/pages';

function ClientReturn() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchClientReturnData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getClientReturnData();
        setData(response.result);
      } catch (err) {
        setError(err.message || 'Failed to fetch projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchClientReturnData();
  }, []);
  return (
    <>
      <ClientReturnHero />
      <AdvisoryClient />
      <LettersToInvestor />
      <IncomeThrough data={data?.client_returns} />
      <HistoricalAbility />
      <SeePerformance />
      <BetterPortfolio />
    </>
  );
}

export default ClientReturn;
