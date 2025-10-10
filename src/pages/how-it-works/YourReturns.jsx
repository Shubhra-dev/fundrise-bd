import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import GradientBgTextBox from './GradientBgTextBox';

function YourReturns() {
  return (
    <SectionLayout rounded="rounded-t-[30px]">
      <div className="flex flex-col sm:flex-row items-center justify-normal gap-12 tab:gap-[108px]">
        <div className="w-full sm:w-[55%] tab:w-1/2">
          <Title extraClass={`pt-[15px] mb-2.5`}>
            Your returns are maximized through our
            <span className="text-btext-3-dark"> end-to-end technology</span>
          </Title>
          <BodyBase fontWeight={`font-normal`}>
            While historically profitable, the private market investing industry is notorious for
            its high fees, misaligned incentives, and near-total lack of technological innovation.
            Fundrise investors, on the other hand, are arguably able to own private market assets in
            a more low-cost way than was previously ever possible.
          </BodyBase>
          <BodyBase fontWeight={`font-normal`} extraClass={`mt-2`}>
            We've redesigned each step of the investment management process, replacing high-cost
            manual workflows with software-enabled automated systems. The result is a single
            integrated platform designed to deliver better net performance potential.
          </BodyBase>
          <div className="pt-10 flex items-center justify-normal gap-5 laptop:gap-[30px] w-full">
            <PrimaryButton
              label="Learn about our technology"
              rightIcon={true}
              bg="bg-bg-dusky-plum-base hover:bg-bg-cool-irish-light hover:text-black"
            />
          </div>
        </div>
        <div className="w-full sm:w-[45%] tab:w-1/2 flex flex-col gap-9">
          <GradientBgTextBox
            title={`Direct-access platform`}
            text={`We offer direct access to our funds through our online platform, with no middlemen or brokers required.`}
          />
          <GradientBgTextBox
            title={`Investor servicing and fund management`}
            text={`Cornice™, our internal software system, enables us to handle tax reporting, fund administration, and transaction management—all at a fraction of the cost of traditional firms.`}
          />
          <GradientBgTextBox
            title={`Performance-enhancing asset operations`}
            text={`We’ve developed data infrastructure tools, like Basis™, to unlock real-time information, automate reporting, and improve performance across our 20,000+ units.`}
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default YourReturns;
