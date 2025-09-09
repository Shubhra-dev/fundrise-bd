function BodySmall({
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
      className={`text-[16px] ${fontWeight ? fontWeight : 'font-normal'} ${
        font ? font : 'font-sans'
      } ${leading ? leading : 'leading-[150%]'} ${
        textColor ? textColor : 'text-paragraph dark:text-paragraph-dark'
      } ${align ? align : 'text-left'} ${tracking ? tracking : 'tracking-[-1%]'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default BodySmall;
