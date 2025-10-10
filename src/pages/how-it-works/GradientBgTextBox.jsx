import SubHeading from '../../components/text/SubHeading';
import CaptionSmall from '../../components/text/CaptionSmall';
function GradientBgTextBox({ title, text }) {
  return (
    <div className=" bg-gradient-to-br from-bg-soft-orchid-dark to-btext-4-dark rounded-[30px]">
      <div className="bg-white/15 h-full w-full p-[30px] rounded-[30px]">
        <SubHeading textColor={`text-white`}>{title}</SubHeading>
        <CaptionSmall textColor={`text-white`} extraClass={`mt-[15px]`}>
          {text}
        </CaptionSmall>
      </div>
    </div>
  );
}

export default GradientBgTextBox;
