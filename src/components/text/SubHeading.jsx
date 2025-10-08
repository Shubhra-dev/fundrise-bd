function SubHeading({
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
      className={`text-[20px] sm:text-[22px] tab:text-[24px] ${fontWeight ? fontWeight : 'font-semibold'} ${
        font ? font : 'font-sora'
      } ${leading ? leading : 'leading-[140%]'} ${
        textColor ? textColor : 'text-sub-heading'
      } ${align ? align : 'text-left'} ${tracking ? tracking : 'tracking-[-2%]'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default SubHeading;
