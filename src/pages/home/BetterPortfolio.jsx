import SectionLayout from '../../ui/SectionLayout';
import BetterBg from '../../assets/BetterBg.jpg';
import SubTitle from '../../components/text/SubTitle';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SubHeading from '../../components/text/SubHeading';
import Image2 from '../../assets/Image2.jpg';

function BetterPortfolio() {
  return (
    <SectionLayout bgImg={BetterBg}>
      <div className="flex justify-between items-center gap-10">
        <div>
          <SubTitle textColor={`text-white`}>Start building a better portfolio</SubTitle>
          <div className="sm:flex items-center justify-normal gap-5 mt-2.5 hidden">
            <SubHeading fontWeight={`font-normal`} textColor={`text-white`}>
              Low Fees
            </SubHeading>
            <div class="w-2.5 h-2.5 bg-bg-cool-irish-base rounded-[3px]"></div>
            <SubHeading fontWeight={`font-normal`} textColor={`text-white`}>
              Flexible minimums
            </SubHeading>
            <div class="w-2.5 h-2.5 bg-bg-cool-irish-base rounded-[3px]"></div>
            <SubHeading fontWeight={`font-normal`} textColor={`text-white`}>
              Quarterly liquidity
            </SubHeading>
          </div>
          <div className="mt-2.5 flex flex-col gap-4 sm:hidden">
            <div className="flex gap-5 items-center">
              <div class="w-2.5 h-2.5 bg-bg-cool-irish-base rounded-[3px]"></div>
              <SubHeading fontWeight={`font-normal`} textColor={`text-white`}>
                Low Fees
              </SubHeading>
            </div>
            <div className="flex gap-5 items-center">
              <div class="w-2.5 h-2.5 bg-bg-cool-irish-base rounded-[3px]"></div>
              <SubHeading fontWeight={`font-normal`} textColor={`text-white`}>
                Flexible minimums
              </SubHeading>
            </div>
            <div className="flex gap-5 items-center">
              <div class="w-2.5 h-2.5 bg-bg-cool-irish-base rounded-[3px]"></div>
              <SubHeading fontWeight={`font-normal`} textColor={`text-white`}>
                Quarterly liquidity
              </SubHeading>
            </div>
          </div>
          <div className="mt-9">
            <PrimaryButton rightIcon={1} label="Start Investing" />
          </div>
        </div>
        <div className="chamfer-tr-5 rounded-md bg-border-alternative-1 p-1 hidden tab:block">
          <img src={Image2} alt="build portfolio" className="chamfer-tr-5 rounded-md w-60 h-56" />
        </div>
      </div>
    </SectionLayout>
  );
}

export default BetterPortfolio;
