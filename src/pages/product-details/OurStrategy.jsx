import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import OurStrategyImage from '../../assets/OurStrategy.png';
import Heading from '../../components/text/Heading';
import BodySmall from '../../components/text/BodySmall';
import { FiArrowUpRight } from 'react-icons/fi';
import CaptionSmall from '../../components/text/CaptionSmall';
function OurStrategy({ projectData }) {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`strategy`}>
      <SubHeading>Our Strategy</SubHeading>
      <div className="mt-4 p-5 sm:p-[30px] border rounded-xl border-border-primary flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-normal gap-5 sm:gap-1">
        <div className="sm:w-2/3 tab:w-[75%]">
          <Heading>{projectData?.title}</Heading>
          <div
            className="text-base font-sora text-sub-title list-disc list-inside mt-4 [&_a]:text-btext-1-base [&_a]:font-display [&_a]:text-xl [&_a]:hover:underline [&_a]:py-4 [&_a]:font-semibold"
            dangerouslySetInnerHTML={{ __html: projectData?.details }}
          />
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
