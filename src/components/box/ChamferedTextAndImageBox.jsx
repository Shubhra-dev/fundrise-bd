import BodySmall from '../text/BodySmall';
import Heading from '../text/Heading';

function ChamferedTextAndImageBox({ image, title, body }) {
  return (
    <div className="h-full bg-border-primary chamfer-tr-5 p-[1px] rounded-md">
      <div className="chamfer-tr-5 bg-white rounded-md p-6 h-full flex items-start justify-normal gap-6">
        <div className="w-2/3">
          <Heading>{title}</Heading>
          <BodySmall extraClass={`mt-4`}>{body}</BodySmall>
        </div>
        <img
          src={image}
          alt="card image"
          className="h-full object-cover w-1/3 chamfer-tr-5 rounded-md"
        />
      </div>
    </div>
  );
}

export default ChamferedTextAndImageBox;
