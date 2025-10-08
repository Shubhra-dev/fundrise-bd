import CaptionSmall from '../../components/text/CaptionSmall';
import SubHeading from '../text/SubHeading';
function TextBoxWhyFundrise({ marked, title, text }) {
  return (
    <div className={`border border-[#F6CDCE] ${marked ? 'bg-bg-soft-orchid-dark' : ''} p-5`}>
      <div>
        <SubHeading textColor={marked ? 'text-white' : 'text-title'} fontWeight={`font-semibold`}>
          {title}
        </SubHeading>
        <div
          className={`w-full my-[13px] h-2 bg-bg-soft-orchid-base flex flex-col justify-between`}
        ></div>
        <CaptionSmall textColor={marked ? 'text-white' : 'text-paragraph'}>{text}</CaptionSmall>
      </div>
    </div>
  );
}

export default TextBoxWhyFundrise;
