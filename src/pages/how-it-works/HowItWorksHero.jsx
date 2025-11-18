import SectionLayout from '../../ui/SectionLayout';
import HowItWorksHeroBg from '../../assets/RealEstateHero.jpg';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import { Link } from 'react-router-dom';
function HowItWorksHero() {
  return (
    <SectionLayout rounded="rounded-t-[30px]" bg={`bg-bg-soft-orchid-dark`}>
      <div className="flex flex-col tab:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <div className="tab:w-[40%] bgLap:w-1/2 p-2.5 rounded-md chamfer-tr-6 bg-border-alternative-1">
          <img
            src={HowItWorksHeroBg}
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
            How it works
          </SubHeading>
          <Title textColor={`text-white`} extraClass={`pt-[15px] pb-2.5`}>
            Quality assets. Smart technology. Low fees.
          </Title>
          <BodyBase fontWeight={`font-normal`} textColor={`text-white`}>
            We blend our investment expertise with smart technology to provide our 385,000+
            investors with the buying power and investment opportunities traditionally reserved for
            billion dollar institutions.
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

export default HowItWorksHero;
