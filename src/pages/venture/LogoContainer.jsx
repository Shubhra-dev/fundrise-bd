import Logo1 from '../../assets/Logo1.svg';
import Logo2 from '../../assets/Logo2.svg';
import Logo3 from '../../assets/Logo3.svg';
import Logo4 from '../../assets/Logo4.svg';
import Logo5 from '../../assets/Logo5.svg';
function LogoContainer() {
  return (
    <div className={`w-full bg-bg-secondary`}>
      <div className={` max-w-screen-content m-auto`}>
        <div
          className={`py-5 px-5 sm:px-8 w-full smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto flex flex-wrap tab:flex-nowrap items-center justify-center tab:justify-between gap-10 tab:gap-0`}
        >
          <img src={Logo1} alt="logo" />
          <img src={Logo2} alt="logo" />
          <img src={Logo3} alt="logo" />
          <img src={Logo4} alt="logo" />
          <img src={Logo5} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default LogoContainer;
