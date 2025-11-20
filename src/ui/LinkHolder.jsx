import { IoChevronForward } from 'react-icons/io5';
import { useState } from 'react';
import CaptionSmall from '../components/text/CaptionSmall';

function LinkHolder({ text, link }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      href={link}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`flex cursor-pointer items-center justify-normal gap-1.5 transition-transform duration-200 ${
        isActive ? 'translate-x-2' : 'translate-x-0'
      }`}
    >
      <IoChevronForward className="text-base" />
      <CaptionSmall leading={`leading-tight`} textColor={`text-sub-title`}>
        {text}
      </CaptionSmall>
    </a>
  );
}

export default LinkHolder;
