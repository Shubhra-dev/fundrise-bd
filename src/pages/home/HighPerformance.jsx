import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import HighPer from '../../assets/HighPer.jpg';
import CaptionBase from '../../components/text/CaptionBase';
import Title from '../../components/text/Title';
import { Link } from 'react-router-dom';

function HighPerformance() {
  return (
    <SectionLayout bg={`bg-bg-dusky-plum-dark`}>
      <div className="flex flex-col tab:flex-row items-center tab:items-end tab:justify-between gap-10 tab:gap-20 laptop:gap-[140px]">
        <div className="laptop:w-min">
          <Title textColor={`text-white`} extraClass={`laptop:w-max tab:pr-10`}>
            High-performance technology
          </Title>
          <BodyBase fontWeight={`font-normal`} textColor={`text-white`} extraClass={`mt-5`}>
            We’ve spent 10+ years systematically replacing the industry standard of spreadsheets,
            PDFs, and expensive 3rd-party vendors with API-driven, fully integrated investor
            servicing, fund management, and asset management software.
          </BodyBase>
        </div>
        <div>
          <Link to="/how-it-works">
            <PrimaryButton bg="bg-bg-cool-irish-base" rightIcon={true} label="Learn More" />
          </Link>
        </div>
      </div>
      <div className="my-10 bg-border-brand-1 p-2 w-full rounded-md chamfer-tr-5">
        <img
          src={HighPer}
          alt="office building"
          className="chamfer-tr-5 rounded-md h-84 tab:h-96 w-full object-cover"
        />
      </div>
      <div>
        <BodyBase fontWeight={`font-normal`} textColor={`text-white`}>
          Our end-to-end, fully integrated technology platform is an industry first, drastically
          reducing operating costs, enabling sophisticated use of data, and delivering improved
          performance management. The results are dramatic:
        </BodyBase>
        <ul className="list-inside list-disc text-white leading-[150%] tab:leading-[140%] text-[18px] tab:text-[20px] font-sans mt-2">
          <li>Unprecedented real-time oversight & reporting</li>
          <li>Low fees, with no promote or carried interest</li>
          <li>Virtually unlimited scale</li>
          <li>Unprecedented convenience</li>
          <li>Better expected net returns</li>
        </ul>
      </div>
      <div className="mt-10 grid sm:grid-cols-3 w-full items-stretch">
        {/* Left aligned */}
        <div className="py-0 pb-4 sm:py-4 sm:pr-5 tab:pr-10 border-b-2 sm:border-b-0 sm:border-r border-border-primary flex flex-col items-start sm:items-center tab:items-start h-full">
          <div>
            <SubTitle textColor="text-white">
              Basis<sup>TM</sup>
            </SubTitle>
          </div>
          <CaptionBase textColor="text-heading-dark" extraClass="tab:w-3/4">
            An operating system for real estate asset management
          </CaptionBase>
        </div>
        {/* Center aligned */}
        <div className="py-4 sm:px-5 tab:px-10 border-b-2 sm:border-b-0 sm:border-r border-border-primary flex flex-col items-start sm:items-center h-full">
          <div>
            <SubTitle textColor="text-white">
              Cornice<sup>TM</sup>
            </SubTitle>
          </div>
          <CaptionBase textColor="text-heading-dark" extraClass="tab:w-3/4">
            An operating system for investor servicing and fund management
          </CaptionBase>
        </div>
        {/* Right aligned */}
        <div className="py-0 pt-4 sm:py-4 sm:pl-5 tab:pl-10 flex flex-col items-start sm:items-center tab:items-end h-full">
          <div>
            <SubTitle textColor="text-white" align={`text-left`}>
              Equitize<sup>TM</sup>
            </SubTitle>
          </div>
          <div className="tab:flex justify-end w-full">
            <CaptionBase textColor="text-heading-dark" extraClass="tab:w-3/4 tab:text-justify">
              A fintech platform to provide more flexible equity funding for the best technology
              companies and the teams who build them.
            </CaptionBase>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HighPerformance;
