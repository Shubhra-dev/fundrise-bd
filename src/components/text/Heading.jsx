function Heading({
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
      className={`text-[24px] sm:text-[28px] tab:text-[32px] ${fontWeight ? fontWeight : 'font-semibold'} ${
        font ? font : 'font-sora'
      } ${leading ? leading : 'leading-[130%]'} ${
        textColor ? textColor : 'text-heading dark:text-heading-dark'
      } ${align ? align : 'text-left'} ${tracking ? tracking : 'tracking-[-2%]'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default Heading;
