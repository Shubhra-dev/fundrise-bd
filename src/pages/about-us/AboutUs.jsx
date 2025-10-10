import SectionLayout from '../../ui/SectionLayout';
import AboutHero from './AboutHero';
import SetBetterWay from './SetBetterWay';
import ServiceBg from '../../assets/ServiceTitan1.jpg';
import Aurora from '../../assets/Aurora.png';
import Title from '../../components/text/Title';
import BodyBase from '../../components/text/BodyBase';
import TextBoxStats from './TextBoxStats';
import CaptionSmall from '../../components/text/CaptionSmall';
import SubTitle from '../../components/text/SubTitle';
import BodySmall from '../../components/text/BodySmall';
import PrimaryButton from '../../components/buttons/PrimaryButton';
function AboutUs() {
  return (
    <>
      <AboutHero />
      <SetBetterWay />
      <SectionLayout overlay={true} bgImg={ServiceBg}>
        <div
          className="-mt-[200px] px-12 tab:px-[60px] pt-8 tab:pt-[40px] pb-5 bg-center bg-no-repeat bg-cover rounded-2xl"
          style={{ backgroundImage: `url(${Aurora})` }}
        >
          <div className="mt-6 tab:mt-10 mb-10 tab:mb-16 flex flex-col sm:flex-row items-center sm:items-start tab:items-center justify-between gap-14">
            <TextBoxStats detail={`Active investor`} title={`385,000+`} />
            <TextBoxStats detail={`Total portfolio value*`} title={`$7B+`} />
            <TextBoxStats detail={`Net dividends earned by investors`} title={`$361M+`} />
          </div>
          <CaptionSmall textColor={`text-white`} align={`text-center`}>
            *Total real estate value of projects invested in since inception of Rise Companies Corp
            sponsored real estate investment programs, as of 12/31/2023.
          </CaptionSmall>
        </div>
        <div className="mt-12 w-9/10 tab:w-2/3 m-auto">
          <SubTitle textColor={`text-white`} align={`text-center`}>
            Come work with us
          </SubTitle>
          <BodySmall textColor={`text-white`} align={`text-center`} extraClass={`mt-5`}>
            Fundrise is headquartered in the Dupont Circle area of Washington, DC. We’ve been
            recognized as one of the Washington Post’s Top Workplaces, and named to the Forbes
            Fintech 50 three times. <br />
            We look for low-ego, results-driven people with a penchant for bold ideas and an
            obsession with solving problems for our investors.
          </BodySmall>
          <div className="w-max m-auto mt-12">
            <PrimaryButton label="Learn More" />
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default AboutUs;
