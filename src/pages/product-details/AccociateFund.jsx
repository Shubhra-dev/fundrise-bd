import SectionLayout from '../../ui/SectionLayout';
import Image from '../../assets/Grid4.jpg';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Heading from '../../components/text/Heading';
import { GoDotFill } from 'react-icons/go';
function AccociateFund() {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`funds`}>
      <SubHeading>Accociated Fund</SubHeading>
      <div className="mt-4 p-5 sm:p-[30px] border border-border-primary rounded-xl">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-normal gap-2 sm:gap-6">
          <Heading>Income Real Estate Fund</Heading>
          <div className="rounded-lg p-2.5 bg-[#E8FFD9] flex items-center justify-normal gap-1">
            <GoDotFill className="text-success text-xl" />
            <BodySmall>Open</BodySmall>
          </div>
          <div className="rounded-lg p-2.5 bg-bg-primary-2">
            <BodySmall>Private Credit</BodySmall>
          </div>
        </div>
        <BodySmall textColor={`text-sub-heading`} extraClass={`mt-4`}>
          Our Income Real Estate Fund is designed to deliver high current yields from a diversified
          portfolio of our most favored real estate backed fixed income strategies, which is
          primarily gap financing to stabilized and ground-up multifamily and to the acquisition and
          development of housing in the Sunbelt. The Income Real Estate Fund is also heavily focused
          on capitalizing on the current dislocation in real estate credit markets, as described in
          depth by our Great Deleveraging thesis.
        </BodySmall>
      </div>
    </SectionLayout>
  );
}

export default AccociateFund;
