import SectionLayout from '../../ui/SectionLayout';
import SubTitle from '../../components/text/SubTitle';
import BodyBase from '../../components/text/BodyBase';
import { GoDotFill } from 'react-icons/go';
import BodySmall from '../../components/text/BodySmall';
import { useState } from 'react';
const sections = ['overview', 'updates', 'location', 'asset-type', 'strategy', 'funds'];
function handleClick(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
}
function ProductDetailsHero() {
  const [activeSection, setActiveSection] = useState('overview');
  return (
    <SectionLayout>
      <div className="flex items-center justify-normal gap-5">
        <SubTitle>North Orlando Development</SubTitle>
        <div className="flex items-center gap-1">
          <GoDotFill className="text-lg text-bg-blush-mist-dark" />
          <BodySmall>Active</BodySmall>
        </div>
      </div>
      <BodyBase textColor={`text-sub-heading`} extraClass={`mt-[6px]`}>
        Apopka, FL
      </BodyBase>
      <div className="flex items-center justify-normal mt-8 overflow-x-auto border-b border-b-border-primary">
        {sections.map((item, index) => (
          <div
            onClick={() => {
              setActiveSection(item);
              handleClick(item);
            }}
            className={`cursor-pointer text-nowrap text-base font-normal font-sora px-5 transition duration-300 py-2.5 capitalize  ${item === activeSection ? 'border-b-2 border-icon-brand-1' : ''} text-sub-heading`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default ProductDetailsHero;
