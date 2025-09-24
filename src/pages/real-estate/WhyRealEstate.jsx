import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import Heading from '../../components/text/Heading';
import Title from '../../components/text/Title';
import Image from '../../assets/RealEstateHero.jpg';
import SectionLayout from '../../ui/SectionLayout';
import ChamferedTextAndImageBox from '../../components/box/ChamferedTextAndImageBox';

function WhyRealEstate() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row tab:items-end justify-normal gap-5 tab:gap-20">
        <div className="w-full sm:w-1/2 tab:w-1/3">
          <Title>
            Why <span className="text-btext-3-dark">private</span> real estate
          </Title>
        </div>
        <div className="w-full sm:w-1/2 tab:w-2/3">
          <BodyBase>
            Historically, private market real estate has featured a combination of traits not found
            in other asset classes: long-term earning potential and effective diversification beyond
            the stock market.
          </BodyBase>
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-1 tab:grid-cols-2 gap-9 tab:gap-14 items-stretch justify-normal">
        <ChamferedTextAndImageBox
          image={Image}
          title={`Wealth preservation and growth`}
          body={`Alternative assets like private real estate have historically offered a unique combination
          of lower volatility than stocks and higher potential returns than bonds.`}
        />
        <ChamferedTextAndImageBox
          image={Image}
          title={`Income generation`}
          body={`For many investors, the ability to create consistent income—via equity ownership in apartment buildings or single-family rentals that earn income through rental payments, for instance—is one of the most attractive aspects of real estate investing.`}
        />
        <ChamferedTextAndImageBox
          image={Image}
          title={`Superior diversification`}
          body={`Private market assets are less likely to be affected by market fluctuations, helping reduce risk and improving your long-term financial stability—even during sustained periods of economic uncertainty.`}
        />
        <ChamferedTextAndImageBox
          image={Image}
          title={`Built for the future`}
          body={`Our portfolio aims to harness the most powerful long-term macroeconomic drivers of the U.S. economy. Trends like increased demand for well-located residential assets across the sunbelt to the explosion of eCommerce-driven industrial spaces.`}
        />
      </div>
    </SectionLayout>
  );
}

export default WhyRealEstate;
