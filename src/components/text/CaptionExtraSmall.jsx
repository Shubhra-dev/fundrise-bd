function CaptionExtraSmall({
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
      className={`text-[12px] ${fontWeight ? fontWeight : 'font-normal'} ${
        font ? font : 'font-sans'
      } ${leading ? leading : 'leading-[150%]'} ${
        textColor ? textColor : 'text-caption'
      } ${align ? align : 'text-left'} ${tracking ? tracking : 'tracking-[0%]'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default CaptionExtraSmall;
