import SectionLayout from '../../ui/SectionLayout';
import BodySmall from '../../components/text/BodySmall';
import SubTitle from '../../components/text/SubTitle';
import Image from '../../assets/HomeHero.jpg';
import SubHeading from '../../components/text/SubHeading';
function AboutHero() {
  return (
    <SectionLayout>
      <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
        about us
      </SubHeading>
      <SubTitle extraClass={`my-[15px] sm:w-[90%] tab:w-[80%]`}>
        We're on a mission to build a better financial system by empowering the individual.
      </SubTitle>
      <BodySmall fontWeight={`font-normal`} textColor={`text-title`}>
        Founded in 2012 and headquartered in Washington, DC, Fundrise is one of the leading real
        estate investment platforms.
      </BodySmall>
      <img
        src={Image}
        alt="section image"
        className="my-10 w-full h-52 sm:h-80 tab:h-96 chamfer-tr-8 rounded-3xl object-center object-cover"
      />
    </SectionLayout>
  );
}

export default AboutHero;
