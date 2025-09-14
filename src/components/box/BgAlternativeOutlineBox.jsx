import BodySmall from '../text/BodySmall';
import SubTitle from '../text/SubTitle';

function BgAlternativeOutlineBox({
  prefix = '',
  posfix = '',
  title = '',
  text = '',
  textColor = `text-sub-title`,
}) {
  return (
    <div className="p-5 min-w-full sm:min-w-[45%] tab:min-w-[20%] bg-bg-alternative rounded-2xl outline outline-4 outline-offset-[-4px] outline-[#D5DCF6]">
      <SubTitle align={`text-center`} textColor={textColor}>
        <span className="text-btext-2-dark">{prefix}</span>
        {title}
        <span className="text-btext-2-dark">{posfix}</span>
      </SubTitle>
      <BodySmall align="text-center" extraClass={`mt-[5px]`}>
        {text}
      </BodySmall>
    </div>
  );
}

export default BgAlternativeOutlineBox;
