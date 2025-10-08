import HowItWorksHero from './HowItWorksHero';
import LogoContainer from '../venture/LogoContainer';
import OurPlatform from './OurPlatform';
function HowItWorks() {
  return (
    <>
      <HowItWorksHero />
      <LogoContainer bg="bg-bg-soft-orchid-light" padding="px-5 py-10" heading={true} />
      <OurPlatform />
    </>
  );
}

export default HowItWorks;
