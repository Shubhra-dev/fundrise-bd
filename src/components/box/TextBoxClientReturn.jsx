import CaptionSmall from '../../components/text/CaptionSmall';
import SubHeading from '../text/SubHeading';
function TextBoxClientReturn({ marked, date, title, text }) {
  return (
    <div className={`border border-[#F6CDCE] ${marked ? 'bg-bg-soft-orchid-dark' : ''} p-5`}>
      <div className={`w-full h-2 bg-bg-soft-orchid-base flex flex-col justify-between`}></div>
      <div>
        <CaptionSmall
          textColor={marked ? 'text-white' : ''}
          extraClass={`uppercase tracking-widest mt-3`}
          fontWeight={`font-medium`}
        >
          {date}
        </CaptionSmall>
        <SubHeading
          textColor={marked ? 'text-white' : ''}
          fontWeight={`font-semibold`}
          extraClass={`my-2.5`}
        >
          {title}
        </SubHeading>
        <CaptionSmall textColor={marked ? 'text-white' : 'text-title'}>{text}</CaptionSmall>
      </div>
    </div>
  );
}

export default TextBoxClientReturn;
