import HowItWorksHero from './HowItWorksHero';
import LogoContainer from '../venture/LogoContainer';
import OurPlatform from './OurPlatform';
import OurAssets from './OurAssets';
import YourReturns from './YourReturns';
import WaysToInterest from './WaysToInterest';
import FAQSection from '../../ui/FAQContainer';
import BetterPortfolio from '../home/BetterPortfolio';
function HowItWorks() {
  return (
    <>
      <HowItWorksHero />
      <LogoContainer bg="bg-bg-soft-orchid-light" padding="px-5 py-10" heading={true} />
      <OurPlatform />
      <OurAssets />
      <YourReturns />
      <WaysToInterest />
      <FAQSection />
      <BetterPortfolio />
    </>
  );
}

export default HowItWorks;
