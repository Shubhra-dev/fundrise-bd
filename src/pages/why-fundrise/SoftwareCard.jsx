import BodyBase from '../../components/text/BodyBase';
import CaptionSmall from '../../components/text/CaptionSmall';
import Title from '../../components/text/Title';

function SoftwareCard({ name, text, heading, img }) {
  return (
    <div className="flex bg-bg-blush-mist-light chamfer-tr-10 rounded-3xl py-7 px-5 sm:px-8 items-center justify-normal gap-2 sm:gap-12">
      <div className="w-[60%] sm:w-[55%]">
        <BodyBase
          extraClass={`uppercase hidden sm:block`}
          fontWeight={`font-semibold`}
          textColor={`text-heading`}
          tracking={`tracking-widest`}
        >
          {heading}
        </BodyBase>
        <CaptionSmall
          extraClass={`uppercase sm:hidden`}
          fontWeight={`font-semibold`}
          textColor={`text-heading`}
          tracking={`tracking-widest`}
        >
          {heading}
        </CaptionSmall>
        <Title extraClass={`my-[15px] sm:w-[90%] tab:w-[80%]`}>
          {name}
          <sup className="text-3xl">TM</sup>
        </Title>
        <BodyBase textColor={`text-sub-heading`} extraClass={`hidden sm:block`}>
          {text}
        </BodyBase>
        <CaptionSmall textColor={`text-sub-heading`} extraClass={`sm:hidden`}>
          {text}
        </CaptionSmall>
      </div>
      <div className="w-[40%] sm:w-[45%]">
        <img
          src={img}
          alt="cornice"
          className="h-56 sm:h-96 w-full object-cover chamfer-tr-8 rounded-2xl"
        />
      </div>
    </div>
  );
}

export default SoftwareCard;
