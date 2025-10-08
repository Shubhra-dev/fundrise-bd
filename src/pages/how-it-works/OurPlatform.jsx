import SectionLayout from '../../ui/SectionLayout';
import OurPlatformImg from '../../assets/OurPlatform.png';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import BodySmall from '../../components/text/BodySmall';
import { FiArrowUpRight } from 'react-icons/fi';
function OurPlatform() {
  return (
    <SectionLayout bg={`bg-bg-secondary`}>
      <div className="flex flex-col sm:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <img
          src={OurPlatformImg}
          alt="hero image"
          className="tab:w-[40%] rounded-md w-full h-60 sm:h-96"
        />

        <div className="tab:w-[60%] bgLap:w-1/2">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            our platform
          </SubHeading>
          <SubTitle extraClass={`pt-[15px]`}>Your first investment is just the beginning.</SubTitle>
          <BodySmall fontWeight={`font-normal`} extraClass={`py-5`}>
            In less than 5 minutes, you can create an account, choose your portfolio strategy, and
            complete your first investment. <br /> After you place your initial investment, we'll
            keep working to add new assets to your portfolio over time — with no additional
            investment required on your end. This means your already-diversified portfolio can
            become stronger year after year. You can then continue making contributions manually or
            set up recurring investments.
          </BodySmall>
          <div className="cursor-pointer flex items-center justify-normal gap-2">
            <BodySmall
              fontWeight={`font-bold`}
              textColor={`text-btext-2-dark`}
              font={`font-display`}
            >
              <a href="">Learn more about your platform</a>
            </BodySmall>
            <FiArrowUpRight className="text-btext-2-dark font-bold" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OurPlatform;
