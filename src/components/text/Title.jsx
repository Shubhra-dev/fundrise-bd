function Title({
  children,
  textColor,
  leading,
  align,
  font,
  fontWeight,
  extraClass,
  onClick,
  title,
}) {
  return (
    <h1
      title={title}
      onClick={onClick ? onClick : () => {}}
      className={`text-[32px] sm:text-[40px] tab:text-[50px] ${fontWeight ? fontWeight : 'font-bold'} ${
        font ? font : 'font-display'
      } ${leading ? leading : 'leading-[120%]'} ${
        textColor ? textColor : 'text-title'
      } ${align ? align : 'text-left'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default Title;
