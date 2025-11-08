import { Link } from 'react-router-dom';
import RoundedButton from '../buttons/RoundedButton';
import BodySmall from '../text/BodySmall';
import Heading from '../text/Heading';

function BottomButtonRoundedWithSeperator({ text, title, slug }) {
  return (
    <div className="bg-bg-blush-mist-light border border-border-brand-4 rounded-[30px] p-5 flex flex-col h-full justify-between">
      <div>
        <Heading fontWeight={`font-semibold`}>{title}</Heading>
        <div class="w-28 h-[5px] bg-bg-dusky-plum-base rounded-md my-[15px]"></div>
        <BodySmall>{text}</BodySmall>
      </div>
      <div className="flex items-center justify-end mt-10">
        <Link
          to={`/letters-to-investor/details/${slug}`}
          className="mt-3 inline-block"
          rel="noopener noreferrer"
        >
          <RoundedButton
            bg="bg-bg-dusky-plum-base"
            hoverBg="hover:bg-bg-dusky-plum-dark"
            rightIcon={true}
            border="outline outline-[12px] tab:outline-[8px] bgLap:outline-[12px] outline-border-alternative-1"
            width="w-72 tab:w-68 bgLap:w-72"
            label={'View Article'}
            rounded="rounded-2xl"
            padding="px-[30px] py-5 -mb-[21px] -mr-[21px]"
          />
        </Link>
      </div>
    </div>
  );
}

export default BottomButtonRoundedWithSeperator;
