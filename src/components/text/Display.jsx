function Display({
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
      className={`text-[32px] sm:text-[46px] tab:text-[62px] ${fontWeight ? fontWeight : 'font-bold'} ${
        font ? font : 'font-display'
      } ${leading ? leading : 'leading-[130%] sm:leading-[120%]'} ${
        textColor ? textColor : 'text-title dark:text-title-dark'
      } ${align ? align : 'text-left'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default Display;
