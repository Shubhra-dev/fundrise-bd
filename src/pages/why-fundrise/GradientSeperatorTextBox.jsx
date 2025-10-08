import BodyBase from '../../components/text/BodyBase';
import CaptionSmall from '../../components/text/CaptionSmall';
function GradientSeperatorTextBox({ text, title }) {
  return (
    <div className="bg-bg-alternative shadow-xl h-full outline outline-[0.50px] outline-offset-[-0.50px] outline-border-primary p-5">
      <div>
        <BodyBase fontWeight={`font-semibold`} textColor={`text-title`}>
          {title}
        </BodyBase>
        <div className="my-[13px] h-2 w-full bg-gradient-to-r from-bg-blush-mist-dark to-bg-cool-irish-dark rounded-lg"></div>
        <CaptionSmall>{text}</CaptionSmall>
      </div>
    </div>
  );
}

export default GradientSeperatorTextBox;
