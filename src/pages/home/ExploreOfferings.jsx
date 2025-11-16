import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import ChamferBorderedCard from '../../components/card/ChamferBorderedCard';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';

function ExploreOfferings() {
  return (
    <SectionLayout>
      <SubTitle>
        Explore <span className="text-btext-1-base">our offerings</span>
      </SubTitle>
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 bgLap:grid-cols-3 gap-12">
        <ChamferBorderedCard
          buttonLabel={`Explore Our Real estate Portfolio`}
          title={`Real estate`}
          text={`Fundrise is one of the 50 largest real estate private equity investors in the world by total annual deployment — deploying more than $1 billion of capital annually in 2021 and 2022. Our portfolio is largely composed of 20,000+ well-located residential units and eCommerce-centric industrial assets.`}
          image={Image1}
          link={`/real-estate`}
        />
        <ChamferBorderedCard
          buttonLabel={`Explore Our venture Portfolio`}
          title={`Venture capital`}
          text={`Investing in high-growth private technology companies has proven to be one of the best performing strategies of the last 50 years. Our growth equity fund targets mid-to-late stage companies in sectors like Modern Data Infrastructure, FinTech, and AI/ML.`}
          image={Image2}
          link={`/venture`}
        />
        <ChamferBorderedCard
          buttonLabel={`Explore Our private credit Portfolio`}
          text={`Skyrocketing interest rates have created broad credit market dislocations and a potential liquidity crisis. The result is arguably the most attractive, risk-adjusted private credit investing opportunity of the last few decades.`}
          title={`Private credit`}
          link={`/private-credit`}
          image={Image3}
        />
      </div>
    </SectionLayout>
  );
}

export default ExploreOfferings;
