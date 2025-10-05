import FeaturedFund from './FeaturedFund';
import OurStrategy from './OurStrategy';
import RealEstateHero from './RealEstateHero';
import WhyRealEstate from './WhyRealEstate';
import ExplorePortfolios from '../private-credit/ExplorePortfolios';
import AddVenture from '../venture/AddVenture';

function RealEstate() {
  return (
    <>
      <RealEstateHero />
      <WhyRealEstate />
      <FeaturedFund />
      <OurStrategy />
      <ExplorePortfolios markerColor="text-btext-3-dark" markerColorBg="bg-bg-soft-orchid-base" />
      <AddVenture text="Add real estate to your portfolio" />
    </>
  );
}

export default RealEstate;
