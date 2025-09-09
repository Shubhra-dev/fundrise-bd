import CaptionBase from '../text/CaptionBase';
import BodyBase from '../text/BodyBase';

function IconBox({ text, title, children, sign }) {
  return (
    <div className="sm:w-max flex items-start justify-normal gap-6">
      <div className="chamfer-tr-4 rounded-md bg-bg-blush-mist-base/50 p-[15px]">{children}</div>
      <div className="tab:w-min">
        <BodyBase fontWeight="font-bold" extraClass="w-max">
          {title}
          <span className="text-btext-4-dark">{sign}</span>
        </BodyBase>
        <CaptionBase extraClass="mt-2.5">{text}</CaptionBase>
      </div>
    </div>
  );
}

export default IconBox;
