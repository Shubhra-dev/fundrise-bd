import AddVenture from '../venture/AddVenture';
import AboutOurStrategy from './AboutOurStrategy';
import ExplorePortfolios from './ExplorePortfolios';
import IncomeFund from './IncomeFund';
import OurTrackRecord from './OurTrackRecord';
import PrivateCreditHero from './PrivateCreditHero';
import WhyPrivateCredit from './WhyPrivateCredit';

function PrivateCredit() {
  return (
    <>
      <PrivateCreditHero />
      <WhyPrivateCredit />
      <OurTrackRecord />
      <IncomeFund />
      <AboutOurStrategy />
      <ExplorePortfolios />
      <AddVenture text="Add private credit to your portfolio" />
    </>
  );
}

export default PrivateCredit;
