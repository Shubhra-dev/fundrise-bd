import SectionLayout from '../../ui/SectionLayout';
import RealEstateHeroBg from '../../assets/RealEstateHero.jpg';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import { Link } from 'react-router-dom';
function RealEstateHero() {
  return (
    <SectionLayout
      rounded="rounded-t-[30px]"
      bg={`bg-gradient-to-b from-bg-soft-orchid-base to-bg-soft-orchid-dark`}
    >
      <div className="flex flex-col tab:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <div className="tab:w-[40%] bgLap:w-1/2 p-2.5 rounded-md chamfer-tr-6 bg-border-alternative-1">
          <img
            src={RealEstateHeroBg}
            alt="hero image"
            className="rounded-md chamfer-tr-6 w-full tab:h-[400px] laptop:h-[450px]"
          />
        </div>
        <div className="tab:w-[60%] bgLap:w-1/2">
          <SubHeading
            extraClass={`uppercase`}
            tracking={`tracking-widest`}
            textColor={`text-white`}
          >
            real estate
          </SubHeading>
          <Title textColor={`text-white`} extraClass={`pt-[15px] pb-2.5`}>
            An expansive portfolio, calibrated for consistent growth
          </Title>
          <BodyBase fontWeight={`font-normal`} textColor={`text-white`}>
            Our $7+ billion real estate portfolio* is designed to harness the macroeconomic drivers
            of the U.S. real estate market and position our clients for long-term growth.
          </BodyBase>
          <div className="pt-10 flex items-center justify-center sm:justify-normal gap-5 laptop:gap-[30px] w-full">
            <Link to={`/auth/register`}>
              <PrimaryButton
                label="Sign Up"
                bg="bg-bg-cool-irish-base hover:bg-bg-cool-irish-light hover:text-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default RealEstateHero;
