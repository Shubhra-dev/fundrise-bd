import BodyBase from '../../components/text/BodyBase';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import { BsStarFill } from 'react-icons/bs';
function NewsCard({ image, title, starCount, strategy, badge, summary, imageAlt }) {
  return (
    <div
      className={`relative flex ${badge === 'Feature Update' ? `bg-bg-primary-2` : badge === 'New Acquisition' ? 'bg-bg-blush-mist-light' : ' border border-border-primary'} w-full items-stretch justify-normal gap-6 rounded-[10px]`}
    >
      <img src={image} alt={imageAlt} className="w-[30%] object-cover h-48 rounded-l-[10px]" />
      <div className="py-5 pr-5 rounded-r-[10px] w-[70%] flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div
            className={`py-[5px] px-2 w-max ${badge === 'Performance Update' ? 'bg-bg-secondary' : 'bg-white'} rounded-md`}
          >
            <CaptionExtraSmall>{badge}</CaptionExtraSmall>
          </div>
          <BodyBase fontWeight={`font-bold`} extraClass={`mt-2.5 mb-1.5 truncate`}>
            {title}
          </BodyBase>
          <CaptionExtraSmall textColor={`text-disable`}>{summary}</CaptionExtraSmall>
        </div>
        <div className={`flex items-center ${strategy ? 'justify-between' : 'justify-end'} mt-6`}>
          {strategy && (
            <div>
              <CaptionExtraSmall textColor={`text-disable`}>S T R A T E G Y</CaptionExtraSmall>
              <div className="flex items-center justify-normal gap-1">
                <div className="w-2 h-2 bg-bg-cool-irish-base rounded-full"></div>
                <CaptionExtraSmall textColor={`text-sub-heading`} leading={`leading-none`}>
                  {strategy}
                </CaptionExtraSmall>
              </div>
            </div>
          )}
          <button className="px-5 py-2 text-sm font-bold bg-white rounded-xl shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-border-secondary font-display">
            Read More
          </button>
        </div>
      </div>
      {starCount > 0 && (
        <div className="absolute top-5 right-0 p-[3px] bg-bg-blush-mist-dark rounded-l-sm flex items-center gap-1">
          <BsStarFill className={`text-white text-xs`} />
          <BsStarFill className={`text-white text-xs ${starCount === 2 ? '' : 'invisible'}`} />
          <BsStarFill className={`text-white text-xs ${starCount === 3 ? '' : 'invisible'}`} />
        </div>
      )}
    </div>
  );
}

export default NewsCard;
