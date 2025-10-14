import { IoChevronForward } from 'react-icons/io5';
import CaptionSmall from '../components/text/CaptionSmall';

function LinkHolder({ text }) {
  return (
    <div onClick={() => {}} className="flex items-center justify-normal gap-1.5">
      <IoChevronForward className="text-base" />
      <CaptionSmall leading={`leading-tight`} textColor={`text-sub-title`}>
        {text}
      </CaptionSmall>
    </div>
  );
}

export default LinkHolder;
