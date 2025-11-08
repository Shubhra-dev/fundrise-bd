import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsHero from './ProductDetailsHero';
import Overview from './Overview';
import Updates from './Updates';
import Location from './Location';
import AssetType from './AssetType';
import OurStrategy from './OurStrategy';
import AccociateFund from './AccociateFund';
import { getProjectDetails } from '@/services/pages';
import SubTitle from '@/components/text/SubTitle';
import BuildingIcon from '@/assets/icons/Building_02.svg';
import FileCheckIcon from '@/assets/icons/FileCheck.svg';
import BodySmall from '@/components/text/BodySmall';

function ProductDetails() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getProjectDetails(slug);
        setData(response.result.project);
      } catch (err) {
        setError(err.message || 'Failed to fetch project details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectDetails();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <div className="animate-bounce">
          <img src={BuildingIcon} alt="Loading" className="w-16 h-16" />
        </div>
        <SubTitle className="text-center">Loading Project Details</SubTitle>
        <BodySmall className="text-center">
          Please wait while we fetch the project information
        </BodySmall>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <div className="animate-pulse">
          <img src={FileCheckIcon} alt="Error" className="w-16 h-16" />
        </div>
        <SubTitle className="text-center text-red-600">Error Occurred</SubTitle>
        <BodySmall className="text-center text-red-500">{error}</BodySmall>
      </div>
    );
  }

  return (
    <>
      <ProductDetailsHero projectData={data} />
      <Overview projectData={data} />
      <Updates projectData={data?.updates} />
      <Location projectData={data} />
      <AssetType projectData={data?.asset_type} />
      <OurStrategy projectData={data?.strategy} />
      {/* <AccociateFund projectData={data} /> */}
    </>
  );
}

export default ProductDetails;
