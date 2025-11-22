import { BiChevronRight } from 'react-icons/bi';
import BodyBase from '../../components/text/BodyBase';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import RadialProgress from '../../ui/RadialProgress';
import { useNavigate } from 'react-router-dom';

/**
 * PortfolioOverviewCards
 *
 * Improvements:
 * - Clickable element is now a <button> for better accessibility.
 * - Navigation is configurable via `onClick` prop.
 *   If no `onClick` is passed, it falls back to /user/portfolio.
 */
function PortfolioOverviewCards({ pct, title, onClick }) {
  const nav = useNavigate();

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else {
      nav('/user/portfolio');
    }
  };

  const percentage = Number.isFinite(Number(pct)) ? Number(pct) : 0;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex w-full items-center gap-4 p-1.5 tab:p-2.5 cursor-pointer rounded-[10px] hover:bg-bg-primary-2 transition-colors"
    >
      <div className="w-1/6">
        <RadialProgress
          value={percentage}
          size={40}
          strokeWidth={8}
          trackColor="stroke-slate-200"
          progressColor="stroke-bg-dusky-plum-base"
          startAngle={-90}
        />
      </div>
      <div className="w-5/6 flex items-center justify-normal">
        <div className="w-[80%] tab:w-[85%] flex-1 min-w-0 text-left">
          <BodyBase font="font-semibold truncate" leading="leading-none">
            {title}
          </BodyBase>
          <CaptionExtraSmall extraClass="mt-[3px]">{percentage}% of Portfolio</CaptionExtraSmall>
        </div>
        <div className="w-[20%] tab:w-[15%] flex items-center justify-end">
          <BiChevronRight className="text-xl" aria-hidden="true" />
        </div>
      </div>
    </button>
  );
}

export default PortfolioOverviewCards;
