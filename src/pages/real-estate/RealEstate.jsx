import FeaturedFund from './FeaturedFund';
import OurStrategy from './OurStrategy';
import RealEstateHero from './RealEstateHero';
import WhyRealEstate from './WhyRealEstate';
import ExplorePortfolios from '../private-credit/ExplorePortfolios';

function RealEstate() {
  return (
    <>
      <RealEstateHero />
      <WhyRealEstate />
      <FeaturedFund />
      <OurStrategy />
      <ExplorePortfolios markerColor="text-btext-3-dark" markerColorBg="bg-bg-soft-orchid-base" />
    </>
  );
}

export default RealEstate;
