import BodySmall from '../../components/text/BodySmall';
import SubHeading from '../../components/text/SubHeading';
import SectionLayout from '../../ui/SectionLayout';
import StackedImageCarousel from '../../ui/StackedImageSlider';
function Overview() {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`overview`}>
      <SubHeading>Overview</SubHeading>
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-normal gap-11 tab:gap-20">
        <div className="w-full sm:w-[55%] tab:w-[45%] border border-border-primary">
          <div className="px-7 py-4 flex items-center justify-between border-b border-b-border-primary">
            <BodySmall textColor={`text-sub-heading`}>Asset Class</BodySmall>
            <BodySmall textColor={`text-sub-heading`}>Private Credit</BodySmall>
          </div>
          <div className="px-7 py-4 flex items-center justify-between border-b border-b-border-primary">
            <BodySmall textColor={`text-sub-heading`}>Asset Type</BodySmall>
            <BodySmall textColor={`text-sub-heading`}>Preferred equity</BodySmall>
          </div>
          <div className="px-7 py-4 flex items-center justify-between border-b border-b-border-primary">
            <BodySmall textColor={`text-sub-heading`}>Strategy</BodySmall>
            <BodySmall textColor={`text-sub-heading`}>Fixed income</BodySmall>
          </div>
          <div className="px-7 py-4 flex items-center justify-between">
            <BodySmall textColor={`text-sub-heading`}>Funds</BodySmall>
            <BodySmall textColor={`text-sub-heading`}>Income real estate fund</BodySmall>
          </div>
        </div>
        <div className="w-full sm:w-[45%] tab:w-[55%]">
          <StackedImageCarousel />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Overview;
