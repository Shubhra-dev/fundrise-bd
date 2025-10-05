import AdvisoryClient from './AdvisoryClient';
import ClientReturnHero from './ClientReturnHero';
import HistoricalAbility from './HistoricalAbility';
import IncomeThrough from './IncomeThrough';
import LettersToInvestor from './LettersToInvestor';
import SeePerformance from './SeePerformance';
import BetterPortfolio from '../home/BetterPortfolio';

function ClientReturn() {
  return (
    <>
      <ClientReturnHero />
      <AdvisoryClient />
      <LettersToInvestor />
      <IncomeThrough />
      <HistoricalAbility />
      <SeePerformance />
      <BetterPortfolio />
    </>
  );
}

export default ClientReturn;
