function ChamferedBorder({
  width = 'w-full',
  chamferedRadius = '5',
  borderWidth = `[1px]`,
  borderRadius = `rounded-md`,
  borderColor = `bg-border-alternative-1`,
  children,
}) {
  return (
    <div
      className={`${width} ${borderColor} ${`chamfer-tr-${chamferedRadius}`} ${`p-${borderWidth}`} ${borderRadius}`}
    >
      {children}
    </div>
  );
}

export default ChamferedBorder;
