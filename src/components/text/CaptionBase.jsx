function CaptionBase({
  children,
  textColor,
  leading,
  align,
  font,
  fontWeight,
  extraClass,
  onClick,
  tracking,
  title,
}) {
  return (
    <h1
      title={title}
      onClick={onClick ? onClick : () => {}}
      className={`text-[14px] ${fontWeight ? fontWeight : 'font-normal'} ${
        font ? font : 'font-sans'
      } ${leading ? leading : 'leading-[150%]'} ${
        textColor ? textColor : 'text-caption dark:text-caption-dark'
      } ${align ? align : 'text-left'} ${tracking ? tracking : 'tracking-[0%]'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default CaptionBase;
