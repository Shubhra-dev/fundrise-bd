function SectionLayout({
  children,
  bg,
  innerBg,
  padding,
  id,
  bgImg,
  rounded = 'rounded-t-[30px]',
  overlay = false, // 👈 new prop: enable black overlay
  overlayOpacity = 'bg-black/80', // 👈 customizable opacity (Tailwind syntax)
}) {
  return (
    <div
      id={id || ''}
      className={`relative w-full ${rounded} ${
        bg ? bg : 'bg-white'
      } ${bgImg ? 'bg-cover bg-center bg-no-repeat' : ''}`}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}
    >
      {/* ✅ Overlay Layer */}
      {bgImg && overlay && (
        <div className={`absolute inset-0 ${overlayOpacity} ${rounded} pointer-events-none`}></div>
      )}

      {/* Content Wrapper */}
      <div className={`relative ${rounded} max-w-screen-content mx-auto ${innerBg ? innerBg : ''}`}>
        <div
          className={`px-5 sm:px-8 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto ${
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
