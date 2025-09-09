import { FaInfoCircle } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function RoundedButton({
  label = 'Button',
  bg = `bg-bg-cool-irish-base`,
  hoverBg = `hover:bg-bg-cool-irish-dark`,
  rounded = 'rounded-2xl',
  rightIcon,
  width = `w-full`,
  padding = 'px-2 py-3.5',
  border = '',
  onClick,
}) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`${border} ${width} ${padding} ${bg} ${hoverBg} ${rounded} inline-flex justify-center items-center gap-1.5`}
    >
      <span className="font-display text-white text-base font-bold">{label}</span>
      {rightIcon && <FiArrowUpRight className="h-5 w-5 text-white" />}
    </button>
  );
}
