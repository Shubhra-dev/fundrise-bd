import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import BodyBase from '../../components/text/BodyBase';
import Cornice from '../../assets/Cornice.jpg';
import Image3 from '../../assets/Image3.jpg';
import Equitize from '../../assets/Equitize.jpg';
import SoftwareCard from './SoftwareCard';

function OurTechnology() {
  return (
    <SectionLayout>
      <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
        our technology
      </SubHeading>
      <Title extraClass={`my-[15px] sm:w-[90%] tab:w-[80%]`}>
        Unlocking
        <span className="text-btext-3-base-dark"> better performance</span> with software
      </Title>
      <BodyBase textColor={`text-sub-heading`}>
        We've redesigned each step of the investment management process, replacing high-cost manual
        work flows with software enabled automated systems. The result is a single integrated
        platform, providing an entirely unique investment offering to our customers.
      </BodyBase>
      <div className=" mt-10 flex flex-col items-center justify-normal gap-10">
        <SoftwareCard
          img={Cornice}
          text={`Our internal investor servicing and fund management software system that makes managing 500k investors as simple as managing one.`}
          heading={`Investor servicing and fund operations`}
          name={`Cornice`}
        />
        <SoftwareCard
          img={Image3}
          text={`Our next generation asset management system built on top of a modern data warehouse with real time, automated reporting across hundreds of assets.`}
          heading={`Real Estate Operations`}
          name={`Basis`}
        />
        <SoftwareCard
          img={Equitize}
          text={`A unique platform providing faster, fairer, and more flexible funding solutions for the best technology companies and their employees.`}
          heading={`Growth Equity Platform`}
          name={`Equitize`}
        />
      </div>
    </SectionLayout>
  );
}

export default OurTechnology;
