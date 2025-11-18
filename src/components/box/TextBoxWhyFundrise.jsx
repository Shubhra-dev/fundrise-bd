import { FiArrowUpRight } from 'react-icons/fi';
import CaptionSmall from '../../components/text/CaptionSmall';
import BodySmall from '../text/BodySmall';
import SubHeading from '../text/SubHeading';
import Heading from '../text/Heading';
function TextBoxWhyFundrise({
  marked,
  title,
  text,
  heading = false,
  bg = 'bg-bg-soft-orchid-base',
  borderColor = `border-[#F6CDCE]`,
  link,
  linkText,
}) {
  return (
    <div
      className={`border ${borderColor} ${marked ? 'bg-bg-soft-orchid-dark' : ''} p-5 flex flex-col justify-between`}
    >
      <div>
        {heading && (
          <Heading textColor={marked ? 'text-white' : 'text-title'} fontWeight={`font-semibold`}>
            {title}
          </Heading>
        )}
        {!heading && (
          <SubHeading textColor={marked ? 'text-white' : 'text-title'} fontWeight={`font-semibold`}>
            {title}
          </SubHeading>
        )}
        <div className={`w-full my-[13px] h-2 ${bg} flex flex-col justify-between`}></div>
        <CaptionSmall textColor={marked ? 'text-white' : 'text-paragraph'}>{text}</CaptionSmall>
      </div>
      {link && (
        <div className="cursor-pointer flex items-center justify-normal gap-2 mt-7">
          <BodySmall fontWeight={`font-bold`} textColor={`text-btext-2-dark`} font={`font-display`}>
            <a href={link}>{linkText}</a>
          </BodySmall>
          <FiArrowUpRight className="text-btext-2-dark font-bold text-sm" />
        </div>
      )}
    </div>
  );
}

export default TextBoxWhyFundrise;
