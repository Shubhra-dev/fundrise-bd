import BodySmall from '@/components/text/BodySmall';
import SubTitle from '@/components/text/SubTitle';

function TextBoxItem({
  prefix = '',
  posfix = '',
  title = '',
  text = '',
  textColor = `text-sub-title`,
}) {
  return (
    <div className="p-5 min-w-full sm:min-w-[45%] tab:min-w-[20%] bg-bg-blush-mist-light border-b-[3px] border-border-brand-4">
      <SubTitle align={`text-center`} textColor={textColor}>
        <span className="text-btext-4-dark">{prefix}</span>
        {title}
        <span className="text-btext-4-dark">{posfix}</span>
      </SubTitle>
      <BodySmall textColor={`text-caption`} align="text-center" extraClass={`mt-[5px]`}>
        {text}
      </BodySmall>
    </div>
  );
}

export default TextBoxItem;
