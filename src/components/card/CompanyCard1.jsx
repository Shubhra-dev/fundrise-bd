import CaptionBase from '../text/CaptionBase';
import Heading from '../text/Heading';
import LogoWhite from '../../assets/LogoWhite.svg';
function CompanyCard1({
  innerBg = '#FF4141',
  title = 'Company',
  text = 'Lorem ipsum dolor sit amet consectetur. Malesuada tellus mattis netus risus etiam id diam mauris porta.',
}) {
  return (
    <div className="chamfer-tr-6 rounded-xl bg-border-primary p-[1px] h-full">
      <div className="chamfer-tr-6 bg-white rounded-xl px-4 py-5 flex flex-col h-full justify-between">
        <div className="mb-6">
          <Heading>{title}</Heading>
          <CaptionBase extraClass={`pt-5`}>{text}</CaptionBase>
        </div>
        <div
          className={`chamfer-tr-6 rounded-xl flex items-center justify-center h-40`}
          style={{ backgroundColor: innerBg }}
        >
          <img src={LogoWhite} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default CompanyCard1;
