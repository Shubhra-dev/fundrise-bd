import SectionLayout from '../../ui/SectionLayout';
import PrivateHeroBg from '../../assets/PrivateCreditHeroBg.jpg';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
function PrivateCreditHero() {
  return (
    <SectionLayout
      rounded="rounded-t-[30px]"
      bg={`bg-gradient-to-b from-bg-cool-irish-base to-bg-cool-irish-dark`}
    >
      <div className="flex flex-col tab:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <div className="tab:w-[40%] bgLap:w-1/2 p-2.5 rounded-md chamfer-tr-6 bg-border-alternative-1">
          <img
            src={PrivateHeroBg}
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
            private credit
          </SubHeading>
          <Title textColor={`text-white`} extraClass={`pt-[15px] pb-2.5`}>
            An opportunistic strategy for income-focused investors
          </Title>
          <BodyBase fontWeight={`font-normal`} textColor={`text-white`}>
            Our new private credit investment strategy capitalizes on the changed economic
            environment, offering some of the most attractive potential risk-adjusted returns of the
            past decade.
          </BodyBase>
          <div className="pt-10 flex items-center justify-center sm:justify-normal gap-5 laptop:gap-[30px] w-full">
            <PrimaryButton
              label="Sign Up"
              bg="bg-bg-cool-irish-base hover:bg-bg-cool-irish-light hover:text-black"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default PrivateCreditHero;
