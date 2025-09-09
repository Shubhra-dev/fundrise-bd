function SectionLayout({ children, bg, innerBg, padding, id, bgImg }) {
  return (
    <div
      id={id ? id : ''}
      className={`w-full ${bg ? bg : 'bg-white'} ${bgImg ? 'bg-cover bg-center bg-no-repeat' : ''}`}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}
    >
      <div className={`max-w-screen-content m-auto ${innerBg ? innerBg : ''}`}>
        <div
          className={`py-12 sm:py-16 tab:py-24 px-5 sm:px-8 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto ${
            padding ? padding : 'py-12 sm:py-16 tab:py-24'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default SectionLayout;
