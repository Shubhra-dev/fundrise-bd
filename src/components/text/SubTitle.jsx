function SubTitle({
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
      className={`text-[28px] sm:text-[36px] tab:text-[40px] ${fontWeight ? fontWeight : 'font-semibold'} ${
        font ? font : 'font-display'
      } ${leading ? leading : 'leading-[130%] tab:leading-[120%]'} ${
        textColor ? textColor : 'text-sub-title'
      } ${align ? align : 'text-left'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default SubTitle;
