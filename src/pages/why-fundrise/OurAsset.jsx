import SectionLayout from '../../ui/SectionLayout';
import InstituteScale from '../../assets/InstituteScale.jpg';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import BodySmall from '../../components/text/BodySmall';
import { FiArrowUpRight } from 'react-icons/fi';
function OurAsset() {
  return (
    <SectionLayout bg={`bg-bg-secondary`}>
      <div className="flex flex-col sm:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <div className="chamfer-tr-6 rounded-md p-2.5 sm:w-[30%] tab:w-[40%] bgLap:w-1/2 bg-bg-alternative">
          <img
            src={InstituteScale}
            alt="hero image"
            className=" rounded-md w-full chamfer-tr-6 h-60 sm:h-96"
          />
        </div>
        <div className="tab:w-[60%] bgLap:w-1/2">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            our assets
          </SubHeading>
          <SubTitle extraClass={`pt-[15px]`}>Institutional scale</SubTitle>
          <BodySmall fontWeight={`font-normal`} extraClass={`py-5`}>
            Fundrise manages $7B+ of real estate* across the country on behalf of our hundreds of
            thousands of investors. We deliver institutional quality access and scale through our
            unique technology platform.
          </BodySmall>
          <div className="cursor-pointer flex items-center justify-normal gap-2">
            <BodySmall
              fontWeight={`font-bold`}
              textColor={`text-btext-2-dark`}
              font={`font-display`}
            >
              Explore all real estate assets
            </BodySmall>
            <FiArrowUpRight className="text-btext-2-dark font-bold" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OurAsset;
