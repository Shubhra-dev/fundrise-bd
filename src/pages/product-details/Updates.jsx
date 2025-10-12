import SectionLayout from '../../ui/SectionLayout';
import Image from '../../assets/Grid4.jpg';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
function Updates() {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`updates`}>
      <SubHeading>Updates</SubHeading>
      <div className="mt-4 p-5 sm:p-[30px] border border-border-primary rounded-xl">
        <BodyBase fontWeight={`font-bold`} textColor={`text-sub-heading`}>
          New acquisition
        </BodyBase>
        <BodySmall textColor={`text-sub-heading`} extraClass={`mt-1.5`}>
          March 19, 2025
        </BodySmall>
        <BodySmall textColor={`text-sub-heading`} extraClass={`my-4`}>
          New high-yield investment with a 13% fixed return in a 300-unit multifamily development
          near Orlando, FL.
        </BodySmall>
        <div className="bg-bg-primary-2 rounded-3xl p-5 flex items-center justify-normal gap-3 sm:gap-16">
          <div className="w-[65%] sm:w-2/3 tab:w-3/4">
            <BodySmall textColor={`text-sub-heading`}>
              Portfolio Update: New preferred equity investment in Orlando metro area
            </BodySmall>
            <div className="mt-3">
              <PrimaryButton textSize="text-sm" label="View Updates" />
            </div>
          </div>
          <img
            src={Image}
            alt="image"
            className="w-[35%] h-28 tab:h-32 sm: sm:w-1/3 tab:w-1/4 rounded-xl object-cover"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Updates;
