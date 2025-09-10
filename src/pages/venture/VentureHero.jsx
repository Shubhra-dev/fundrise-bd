import SectionLayout from '../../ui/SectionLayout';
import VentureHeroImg from '../../assets/VentureHero.jpg';
import Profile from '../../assets/Profile.jpg';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import CaptionBase from '../../components/text/CaptionBase';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { GoStarFill } from 'react-icons/go';
import BodyBase from '../../components/text/BodyBase';
function VentureHero() {
  return (
    <SectionLayout
      rounded="rounded-t-[30px]"
      bg={`bg-gradient-to-b from-bg-soft-orchid-dark to-bg-dusky-plum-dark`}
    >
      <div className="flex flex-col tab:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <div className="tab:w-1/2 rounded-md p-2.5 chamfer-tr-6 bg-border-alternative-1">
          <img
            src={VentureHeroImg}
            alt="hero image"
            className=" rounded-md chamfer-tr-6 tab:h-[400px] laptop:h-[450px]"
          />
        </div>
        <div className="tab:w-1/2">
          <SubHeading
            extraClass={`uppercase`}
            tracking={`tracking-widest`}
            textColor={`text-white`}
          >
            venture capital
          </SubHeading>
          <Title textColor={`text-white`} extraClass={`pt-[15px] pb-2.5`}>
            Invest in tomorrow’s great tech companies, today
          </Title>
          <BodyBase fontWeight={`font-normal`} textColor={`text-white`}>
            We aim to give all investors the opportunity to invest in a portfolio of top-tier
            private technology companies before they IPO.
          </BodyBase>
          <div className="pt-10 flex items-center justify-center sm:justify-normal gap-5 laptop:gap-[30px] w-full">
            <PrimaryButton label="Sign Up" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default VentureHero;
