import BodyBase from '../text/BodyBase';
import BodySmall from '../text/BodySmall';
import CaptionExtraSmall from '../text/CaptionExtraSmall';

function ProductCard({
  image,
  title = `Anna Development`,
  text = `Anna TX.`,
  type = `Preferred Equity`,
}) {
  return (
    <div className="bg-border-primary chamfer-tr-5 p-[1px] rounded-md">
      <div className="chamfer-tr-5 p-2.5 bg-bg-alternative rounded-md">
        <div>
          <img
            src={image}
            alt="card image"
            className="chamfer-tr-5 h-40 w-full rounded-md object-fill"
          />
          <div className="my-6">
            <BodyBase fontWeight={`font-bold`}>{title}</BodyBase>
            <BodySmall>{text}</BodySmall>
          </div>
        </div>
        <div className="rounded-xl w-max py-[5px] px-2.5 bg-bg-cool-irish-light">
          <CaptionExtraSmall>{type}</CaptionExtraSmall>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
