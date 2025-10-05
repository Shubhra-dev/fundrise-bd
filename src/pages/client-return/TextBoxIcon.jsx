import BodySmall from '../../components/text/BodySmall';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import SubTitle from '../../components/text/SubTitle';
import ArrowCircleUpRight from '../../assets/icons/ArrowCircleUpRight.svg';

function TextBoxIcon({ title, text, tag, onClick, bg = `bg-bg-dusky-plum-dark` }) {
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className={`p-[15px] flex flex-col ${bg} rounded-xl`}
    >
      <BodySmall textColor={`text-white`}>{tag}</BodySmall>
      <SubTitle textColor={`text-white`}>{title}</SubTitle>
      <div className="flex items-center justify-normal mt-[5px]">
        <CaptionExtraSmall textColor={`text-white`} extraClass={`w-[90%] pr-8`}>
          {text}
        </CaptionExtraSmall>
        <div className="flex w-[10%] justify-center">
          <img src={ArrowCircleUpRight} alt="icon" className="object-center" />
        </div>
      </div>
    </div>
  );
}

export default TextBoxIcon;
