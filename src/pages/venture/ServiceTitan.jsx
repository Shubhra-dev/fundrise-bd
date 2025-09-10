import SectionLayout from '../../ui/SectionLayout';
import ServiceTitan1 from '../../assets/ServiceTitan1.jpg';
import ServiceTitan2 from '../../assets/ServiceTitan2.jpg';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import BodyBase from '../../components/text/BodyBase';
import PrimaryButton from '../../components/buttons/PrimaryButton';

function ServiceTitan() {
  return (
    <SectionLayout>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-normal gap-5 sm:gap-[90px] tab:gap-[100px] laptop:gap-[140px]">
        <div className="sm:w-[54%]">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            venture capital
          </SubHeading>
          <Title extraClass={`pt-[15px] pb-2.5`}>
            ServiceTitan’s IPO: an Innovation Fund milestone
          </Title>
          <BodyBase fontWeight={`font-normal`}>
            We aim to give all investors the opportunity to invest in a portfolio of top-tier
            private technology companies before they IPO.
          </BodyBase>
          <div className="pt-10 flex items-center justify-center sm:justify-normal gap-5 laptop:gap-[30px] w-full">
            <PrimaryButton label="Read the full update" />
          </div>
        </div>
        <div className="sm:w-[46%] relative">
          <img src={ServiceTitan1} alt="image 1" className="rounded-[30px] w-full sm:h-96" />
          <img
            src={ServiceTitan2}
            alt="image 1"
            className="rounded-[30px] h-1/2 sm:h-48 w-[55%] absolute bottom-0 sm:-bottom-6 outline outline-[10px] outline-white sm:-left-6"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ServiceTitan;
