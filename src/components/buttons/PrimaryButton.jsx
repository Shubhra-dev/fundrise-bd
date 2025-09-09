import { FaInfoCircle } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function PrimaryButton({
  label = 'Button',
  bg = `bg-btext-1-base`,
  hoverBg = `hover:bg-btext-1-dark`,
  rightIcon = false,
  leftIcon = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`w-max chamfer-tr-3 shadow-[inset_0px_5px_4px_0px_rgba(0,0,0,0.25)] rounded-md inline-flex text-nowrap items-center gap-4 px-8 py-4 ${bg} text-white ${hoverBg} font-display text-lg font-bold transition-colors`}
    >
      {leftIcon && <FaInfoCircle className="h-5 w-5" />}
      <span className="font-display text-lg font-bold">{label}</span>
      {rightIcon && <FiArrowUpRight className="h-5 w-5" />}
    </button>
  );
}
