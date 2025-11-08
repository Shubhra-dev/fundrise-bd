import FeaturedFund from './FeaturedFund';
import OurStrategy from './OurStrategy';
import RealEstateHero from './RealEstateHero';
import WhyRealEstate from './WhyRealEstate';
import ExplorePortfolios from '../private-credit/ExplorePortfolios';
import AddVenture from '../venture/AddVenture';
import { getRealEstateData } from '@/services/pages';
import { useEffect, useState } from 'react';
import BodySmall from '@/components/text/BodySmall';
import SubTitle from '@/components/text/SubTitle';
import BuildingIcon from '@/assets/icons/Building_02.svg';
import FileCheckIcon from '@/assets/icons/FileCheck.svg';

function RealEstate() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRealEtateData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getRealEstateData();
        setData(response.result);
      } catch (err) {
        setError(err.message || 'Failed to fetch projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRealEtateData();
  }, []);
  return (
    <>
      <RealEstateHero />
      <WhyRealEstate />
      {isLoading && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="animate-bounce">
            <img src={BuildingIcon} alt="Loading" className="w-16 h-16" />
          </div>
          <SubTitle className="text-center">Loading Data..</SubTitle>
          <BodySmall className="text-center">Please wait while we fetch the data</BodySmall>
        </div>
      )}
      {error && (
        <div className=" flex flex-col items-center justify-center space-y-4">
          <div className="animate-pulse">
            <img src={FileCheckIcon} alt="Error" className="w-16 h-16" />
          </div>
          <SubTitle className="text-center text-red-600">Error Occurred</SubTitle>
          <BodySmall className="text-center text-red-500">{error}</BodySmall>
        </div>
      )}
      {!isLoading && !error && (
        <>
          <FeaturedFund isLoading={isLoading} isError={error} data={data?.real_estate} />
          <OurStrategy data={data?.real_estate} />
        </>
      )}
      <ExplorePortfolios markerColor="text-btext-3-dark" markerColorBg="bg-bg-soft-orchid-base" />
      <AddVenture text="Add real estate to your portfolio" />
    </>
  );
}

export default RealEstate;
