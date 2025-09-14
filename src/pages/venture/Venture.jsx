import AddVenture from './AddVenture';
import LogoContainer from './LogoContainer';
import PortfolioCompanies from './PortfolioCompanies';
import ServiceTitan from './ServiceTitan';
import TheDifference from './TheDifference';
import VentureHero from './VentureHero';
import WhyVenture from './WhyVenture';

function Venture() {
  return (
    <>
      <VentureHero />
      <LogoContainer />
      <ServiceTitan />
      <PortfolioCompanies />
      <WhyVenture />
      <TheDifference />
      <AddVenture />
    </>
  );
}

export default Venture;
