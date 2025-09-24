import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import BodySmall from '../../components/text/BodySmall';
import BodyBase from '../../components/text/BodyBase';
import House from '../../assets/icons/HouseWhite.svg';
import Pie from '../../assets/icons/LayersWhite.svg';
import BuildingBlue from '../../assets/icons/Building_04_white.svg';
function IconBox({ img, text }) {
  return (
    <div className="flex items-center justify-normal gap-5">
      <img src={img} alt="icon" />
      <BodyBase textColor={`text-white`}>{text}</BodyBase>
    </div>
  );
}
function TextBox({ textColor, prefix, postfix, text, title }) {
  return (
    <div className="p-5 bg-bg-alternative rounded-2xl outline outline-4 flex flex-col justify-between outline-offset-[-4px] outline-[#D5DCF6]">
      <div>
        <SubTitle align={`text-center`} textColor={textColor}>
          <span className="text-btext-3-dark">{prefix}</span>
          {title}
          <span className="text-btext-3-dark">{postfix}</span>
        </SubTitle>
        <BodySmall align="text-center" extraClass={`mt-[5px]`}>
          {text}
        </BodySmall>
      </div>
    </div>
  );
}

function FeaturedFund() {
  return (
    <SectionLayout bg={`bg-bg-soft-orchid-dark`}>
      <div className="flex flex-col sm:flex-row items-start justify-normal gap-3.5">
        <div className="w-full sm:w-[40%] tab:w-[28%]">
          <SubHeading
            extraClass={`uppercase`}
            tracking={`tracking-widest`}
            textColor={`text-white`}
          >
            Featured fund
          </SubHeading>
          <SubTitle textColor={`text-white`} font={`font-display`}>
            Flagship Fund
          </SubTitle>
          <BodyBase extraClass={`sm:hidden mt-5`} textColor={`text-white`}>
            Our Income Real Estate Fund is designed to deliver high current yields from a
            diversified portfolio of our most favored real estate backed fixed income strategies,
            which is primarily gap financing to stabilized and ground-up multifamily and to the
            acquisition and development of housing in the Sunbelt. The Income Real Estate Fund is
            also heavily focused on capitalizing on the current dislocation in real estate credit
            markets, as described in depth by our Great Deleveraging thesis.
          </BodyBase>
          <div className="mt-8">
            <SubHeading
              extraClass={`uppercase`}
              fontWeight={`font-semibold`}
              textColor={`text-white`}
            >
              Asset types
            </SubHeading>
            <div className="mt-3 flex flex-col items-start gap-4">
              <IconBox img={House} text={`Build for rent`} />
              <IconBox img={Pie} text={`Industrial properties`} />
              <IconBox img={BuildingBlue} text={`Multifamily apartments`} />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[60%] tab:w-[72%]">
          <BodyBase
            fontWeight={`font-normal`}
            extraClass={`hidden sm:block`}
            textColor={`text-white`}
          >
            Our Flagship Real Estate Fund is designed to deliver long-term appreciation from a
            diversified portfolio of our most favored real estate investment strategies:
            build-for-rent housing communities and multifamily and industrial assets in the Sunbelt.
          </BodyBase>
          <div className="hidden tab:grid pt-14  grid-cols-3 items-stretch gap-10">
            <TextBox text={`Annualized return since inception`} title={`4.4`} postfix={`%`} />
            <TextBox text={`Net asset Value (NAV)`} title={`1.2`} prefix={`$`} postfix={`B`} />
            <TextBox text={`Annualized distribution rate`} title={`0.21`} postfix={`%`} />
          </div>
        </div>
      </div>
      <div className="grid tab:hidden pt-14  sm:grid-cols-3 items-stretch gap-2.5 sm:gap-10">
        <TextBox text={`Annualized return since inception`} title={`7.6`} postfix={`%`} />
        <TextBox text={`Net asset Value (NAV)`} title={`616`} prefix={`$`} postfix={`M`} />
        <TextBox text={`Annualized distribution rate`} title={`7.51`} postfix={`%`} />
      </div>
    </SectionLayout>
  );
}

export default FeaturedFund;
