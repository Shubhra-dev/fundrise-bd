import AboutOurStrategy from './AboutOurStrategy';
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
    </>
  );
}

export default PrivateCredit;
