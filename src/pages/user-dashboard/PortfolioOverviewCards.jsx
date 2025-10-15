import { BiChevronRight } from 'react-icons/bi';
import BodyBase from '../../components/text/BodyBase';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import RadialProgress from '../../ui/RadialProgress';

function PortfolioOverviewCards({ pct, title }) {
  return (
    <div className="flex items-center gap-4 p-1.5 tab:p-2.5">
      <div className="w-1/6">
        <RadialProgress
          value={pct}
          size={40}
          strokeWidth={8}
          trackColor="stroke-slate-200"
          progressColor="stroke-bg-dusky-plum-base" // or your Tailwind token
          startAngle={-90} // start at top
        />
      </div>
      <div className="w-5/6 flex items-center justify-normal">
        <div className="w-[80%] tab:w-[85%] flex-1 min-w-0">
          <BodyBase font={`font-semibold truncate`} leading={`leading-none`}>
            {title}
          </BodyBase>
          <CaptionExtraSmall extraClass={`mt-[3px]`}>{pct}% of Portfolio</CaptionExtraSmall>
        </div>
        <div className="w-[20%] tab:w-[15%]">
          <BiChevronRight className="text-xl " />
        </div>
      </div>
    </div>
  );
}

export default PortfolioOverviewCards;
