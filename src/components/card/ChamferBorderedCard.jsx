import Heading from '../text/Heading';
import BodySmall from '../text/BodySmall';
import RoundedButton from '../buttons/RoundedButton';
function ChamferBorderedCard({ title, text, image, buttonLabel }) {
  return (
    <div className="p-[1px] bg-gray-300 rounded-md chamfer-tr-6 h-full">
      <div className="py-[12px] px-[14px] bg-white rounded-md chamfer-tr-6 h-full  flex flex-col sm:justify-between">
        <div className="pb-6">
          <Heading font="font-display" fontWeight={`font-semibold`}>
            {title}
          </Heading>
          <BodySmall extraClass={`pt-5`}>{text}</BodySmall>
        </div>
        <div>
          <img
            src={image}
            alt="card image"
            className="mb-4 chamfer-tr-6 rounded-md object-cover w-full h-72"
          />
          <RoundedButton label={buttonLabel} />
        </div>
      </div>
    </div>
  );
}

export default ChamferBorderedCard;
