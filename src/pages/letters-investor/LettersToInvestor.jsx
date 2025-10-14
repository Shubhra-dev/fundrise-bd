import SectionLayout from '../../ui/SectionLayout';
import LetterHero from './LetterHero';
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import Heading from '../../components/text/Heading';
import BodySmall from '../../components/text/BodySmall';
import React from 'react';
function LettersToInvestor() {
  return (
    <>
      <LetterHero />
      <SectionLayout padding={`pb-12 sm:pb-16 tab:pb-24`}>
        {[1, 2, 3].map((index) => (
          <div
            className={`flex flex-col gap-5 sm:gap-0 ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-normal mb-[50px]`}
            key={index}
          >
            <img
              src={index % 3 === 0 ? Blog3 : index % 3 === 1 ? Blog1 : Blog2}
              alt="blog image"
              className="w-full sm:w-[45%] tab:first-letter:w-1/2 object-cover h-60 sm:h-48 tab:h-80"
            />
            <div
              className={`w-full sm:w-[55%] tab:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 tab:pr-14' : 'sm:pl-8 tab:pl-14'}`}
            >
              <h2 className="text-2xl sm:text-xl tab:text-3xl font-semibold font-sora">
                Outperformance amidst market uncertainty
              </h2>
              <BodySmall textColor={`text-btext-1-base`} extraClass={`my-[15px] tab:my-5`}>
                APR 10,2025
              </BodySmall>
              <BodySmall textColor={`text-sub-heading`}>
                Strong operating performance resulted in generally positive returns for the first
                quarter of 2025 across real estate, credit, and venture capital.
              </BodySmall>
            </div>
          </div>
        ))}
      </SectionLayout>
    </>
  );
}

export default LettersToInvestor;
