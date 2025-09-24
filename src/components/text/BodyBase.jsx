function BodyBase({
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
      className={`text-[18px] tab:text-[20px] ${fontWeight ? fontWeight : 'font-normal'} ${
        font ? font : 'font-sans'
      } ${leading ? leading : 'leading-[150%] tab:leading-[140%]'} ${
        textColor ? textColor : 'text-paragraph'
      } ${align ? align : 'text-left'} ${tracking ? tracking : 'tracking-[-1%]'} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </h1>
  );
}
export default BodyBase;
