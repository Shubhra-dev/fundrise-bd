import { useState } from 'react';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import Image1 from '../../assets/Image1.jpg';
import ProductCard from '../../components/card/ProductCard';

function ExplorePortfolios({
  markerColor = 'text-btext-2-dark',
  markerColorBg = `bg-bg-cool-irish-base`,
}) {
  const [status, setStatus] = useState(`active`);
  return (
    <SectionLayout>
      <div className="flex items-end justify-normal gap-16">
        <SubTitle extraClass={`w-[35%]`}>
          Explore all projects in our <span className={`${markerColor}`}>portfolio</span>
        </SubTitle>
        <BodyBase extraClass={`w-[65%]`}>
          Here are the investments that are powering our investors’ returns.
        </BodyBase>
      </div>
      <div className="flex justify-between items-center my-9">
        <SubHeading>Assets</SubHeading>
        <div className="bg-bg-cool-irish-light flex items-center rounded-md text-xs font-normal text-sub-heading">
          <div
            onClick={() => setStatus('active')}
            className={`cursor-pointer ${status === 'active' ? `${markerColorBg} text-bg-alternative font-bold` : ''} py-2.5 px-5 rounded-md text-xs `}
          >
            Active
          </div>
          <div
            className={`py-2.5 px-5 cursor-pointer ${status === 'completed' ? `${markerColorBg} text-bg-alternative font-bold` : ''} rounded-md`}
            onClick={() => setStatus('completed')}
          >
            Completed
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 tab:grid-cols-4 gap-5 sm:gap-10 items-stretch justify-normal">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard key={item} image={Image1} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default ExplorePortfolios;
