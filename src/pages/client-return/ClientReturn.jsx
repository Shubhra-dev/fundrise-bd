import AdvisoryClient from './AdvisoryClient';
import ClientReturnHero from './ClientReturnHero';
import LettersToInvestor from './LettersToInvestor';

function ClientReturn() {
  return (
    <>
      <ClientReturnHero />
      <AdvisoryClient />
      <LettersToInvestor />
    </>
  );
}

export default ClientReturn;
