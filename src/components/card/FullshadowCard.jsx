import CaptionBase from '../text/CaptionBase';
import Heading from '../text/Heading';

function FullshadowCard({ bg = `bg-bg-blush-mist-light`, text, title }) {
  return (
    <div
      class={`w-full p-7 ${bg} rounded-[30px] shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08)] inline-flex flex-col justify-start items-start gap-2.5`}
    >
      <Heading textColor={`text-btext-1-base`}>{title}</Heading>
      <CaptionBase extraClass={`mt-0.5`}>{text}</CaptionBase>
    </div>
  );
}

export default FullshadowCard;
