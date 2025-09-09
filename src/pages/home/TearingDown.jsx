import SectionLayout from '../../ui/SectionLayout';
import Tearing from '../../assets/Tearing.jpg';
import SubTitle from '../../components/text/SubTitle';
import SubHeading from '../../components/text/SubHeading';

function TearingDown() {
  return (
    <SectionLayout bg={`bg-bg-soft-orchid-light`}>
      <div className="flex items-stretch sm:gap-6 tab:gap-[50px] laptop:gap-[90px] w-full">
        <div className="sm:w-[70%]">
          <SubTitle>Tearing down barriers to the best investments</SubTitle>
          <SubHeading fontWeight={`font-normal`} extraClass={`my-5`}>
            For almost a century, regulatory barriers made it difficult for individuals to invest in
            private markets, giving billion-dollar institutions preferred access. The result has
            been that most investors have been limited to public markets and excluded from private
            investments—ranging from real estate to venture capital. Technology is finally
            disrupting this status quo.1{' '}
          </SubHeading>
          <SubHeading fontWeight={`font-normal`} extraClass={`hidden tab:block`}>
            Enter: Fundrise, America’s largest direct-to-consumer private markets manager. We built
            our technology platform to bridge the barrier. Software allows us to achieve the scale
            of institutions without the bureaucracy. Combining our technology and investment
            expertise, we are pioneering a new model to build you a better portfolio.
          </SubHeading>
        </div>
        <div className="hidden w-[30%] sm:flex items-center justify-center rounded-[40px] overflow-hidden">
          <img src={Tearing} className="h-full w-full object-cover" alt="demo" />
        </div>
      </div>
      <SubHeading fontWeight={`font-normal`} extraClass={`sm:mt-5 tab:hidden`}>
        Enter: Fundrise, America’s largest direct-to-consumer private markets manager. We built our
        technology platform to bridge the barrier. Software allows us to achieve the scale of
        institutions without the bureaucracy. Combining our technology and investment expertise, we
        are pioneering a new model to build you a better portfolio.
      </SubHeading>
    </SectionLayout>
  );
}

export default TearingDown;
