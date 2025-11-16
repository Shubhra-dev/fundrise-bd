import SectionLayout from '../../ui/SectionLayout';
import HomeHeroImg from '../../assets/HomeHero.jpg';
import Profile from '../../assets/Profile.jpg';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import CaptionBase from '../../components/text/CaptionBase';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <SectionLayout bg={`bg-gradient-to-b from-white to-bg-primary-2`}>
      <div className="flex flex-col tab:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <div className="tab:w-1/2 rounded-md p-2.5 chamfer-tr-6 bg-border-alternative-1">
          <img
            src={HomeHeroImg}
            alt="hero image"
            className=" rounded-md chamfer-tr-6 tab:h-[450px]"
          />
        </div>
        <div className="tab:w-1/2">
          <Title>Invest in a better alternative</Title>
          <SubHeading fontWeight={`font-semibold`}>Invest in a better alternative</SubHeading>
          <div className="py-10 flex items-center justify-normal gap-5 laptop:gap-[30px] w-full">
            <Link to="/auth/register">
              <PrimaryButton label="Sign Up" />
            </Link>
            <div className="sm:w-[300px]">
              <CaptionBase>
                Start investing in less than 5 minutes and with as little as $10.
              </CaptionBase>
            </div>
          </div>
          <div>
            <CaptionBase textColor={`text-sub-heading`}>
              Trusted by more than 1 million people
            </CaptionBase>
            <div className="py-3 flex items-center justify-normal">
              <img
                className="z-[9] w-16 h-16 rounded-full border-[3px] border-border-alternative-1"
                src={Profile}
              />
              <img
                className="z-[8] -ml-4 w-16 h-16 rounded-full border-[3px] border-border-alternative-1"
                src={Profile}
              />
              <img
                className="z-[7] -ml-4 w-16 h-16 rounded-full border-[3px] border-border-alternative-1"
                src={Profile}
              />
              <img
                className="z-[6] -ml-4 w-16 h-16 rounded-full border-[3px] border-border-alternative-1"
                src={Profile}
              />
              <img
                className="z-[5] -ml-4 w-16 h-16 rounded-full border-[3px] border-border-alternative-1"
                src={Profile}
              />
            </div>
            <div className="flex items-center justify-normal gap-2.5">
              <GoStarFill className="text-warning" />
              <GoStarFill className="text-warning" />
              <GoStarFill className="text-warning" />
              <GoStarFill className="text-warning" />
              <GoStarFill className="text-warning" />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HomeHero;
