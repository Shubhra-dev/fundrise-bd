import Logo1 from '../../assets/Logo1.svg';
import Logo2 from '../../assets/Logo2.svg';
import Logo3 from '../../assets/Logo3.svg';
import Logo4 from '../../assets/Logo4.svg';
import Logo5 from '../../assets/Logo5.svg';
import BodyBase from '../../components/text/BodyBase';
function LogoContainer({ padding = 'py-5 px-5', heading, bg = 'bg-bg-secondary' }) {
  return (
    <div className={`w-full ${bg}`}>
      <div className={` max-w-screen-content m-auto`}>
        <div className={`${padding} sm:px-8 w-full smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto`}>
          {heading && (
            <BodyBase
              fontWeight={`font-semibold`}
              align={`text-center`}
              textColor={`text-title`}
              extraClass={`mb-5`}
            >
              We partner with some of the biggest financial institutions in the world
            </BodyBase>
          )}
          <div className="flex flex-wrap tab:flex-nowrap items-center justify-center tab:justify-between gap-10 tab:gap-0">
            <img src={Logo1} alt="logo" />
            <img src={Logo2} alt="logo" />
            <img src={Logo3} alt="logo" />
            <img src={Logo4} alt="logo" />
            <img src={Logo5} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoContainer;
