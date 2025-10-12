import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import OurStrategyImage from '../../assets/OurStrategy.png';
import Heading from '../../components/text/Heading';
import BodySmall from '../../components/text/BodySmall';
import { FiArrowUpRight } from 'react-icons/fi';
import CaptionSmall from '../../components/text/CaptionSmall';
function OurStrategy() {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`strategy`}>
      <SubHeading>Our Strategy</SubHeading>
      <div className="mt-4 p-5 sm:p-[30px] border rounded-xl border-border-primary flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-normal gap-5 sm:gap-1">
        <div className="sm:w-2/3 tab:w-[75%]">
          <Heading>Fixed income</Heading>
          <BodySmall extraClass={`mt-6`}>
            Provide real estate backed loans or similar financing
          </BodySmall>
          <ul className="list-inside list-disc text-base font-semibold font-sora text-sub-heading mt-3">
            <li>
              Expected variability of return:<span className="font-normal"> Low</span>
            </li>
            <li>
              Timing of expected return:
              <span className="font-normal"> Typically begin earning interest immediately</span>
            </li>
            <li>
              Primary expected source of returns:
              <span className="font-normal"> Interest income</span>
            </li>
          </ul>
          <div className="cursor-pointer flex items-center justify-normal gap-2 my-6">
            <BodySmall
              fontWeight={`font-bold`}
              textColor={`text-btext-3-dark`}
              font={`font-display`}
            >
              <a href="">Learn more about your platform</a>
            </BodySmall>
            <FiArrowUpRight className="text-btext-3-dark font-bold" />
          </div>
          <CaptionSmall>
            This section is intended to provide a general overview of the Fixed income strategy for
            educational purposes only, and is not meant to be representative of the specific details
            of any individual investment. All investments involve risk; there are no guarantees of
            any returns.
          </CaptionSmall>
        </div>
        <img
          src={OurStrategyImage}
          alt="asset type"
          className="sm:w-1/3 h-48 tab:h-auto tab:w-[25%]"
        />
      </div>
    </SectionLayout>
  );
}

export default OurStrategy;
