import BgAlternativeOutlineBox from '../../components/box/BgAlternativeOutlineBox';
import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import SectionLayout from '../../ui/SectionLayout';
import SubTitle from '../../components/text/SubTitle';

function OurTrackRecord() {
  return (
    <SectionLayout bg={`bg-bg-cool-irish-light`}>
      <div className="flex flex-col sm:flex-row tab:items-end justify-normal gap-5 tab:gap-20">
        <div className="w-full sm:w-1/2 tab:w-1/3">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            our track record
          </SubHeading>
          <SubTitle>
            <span className="text-btext-2-dark">Billion-dollar</span> experience
          </SubTitle>
        </div>
        <div className="w-full sm:w-1/2 tab:w-2/3">
          <BodyBase>
            While this strategy is newly calibrated for this environment, we’re able to draw on a
            deep well of executional experience. Since 2012, we’ve acquired or financed over 37,000
            residential units and have made more than 71 unique mezzanine and preferred equity
            investments in real estate.
          </BodyBase>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap tab:flex-nowrap justify-between gap-6 items-center">
        <BgAlternativeOutlineBox
          prefix="$"
          title="500"
          text="Capital Deployed into Debt Projects"
          posfix=" million"
        />
        <BgAlternativeOutlineBox textColor="text-btext-2-dark" title="90" text="# of Deals" />
        <BgAlternativeOutlineBox textColor="text-btext-2-dark" title="20,194" text="# of Units" />

        <BgAlternativeOutlineBox title="10.8" text="Avg. Net Interest Rate" posfix="%" />
      </div>
    </SectionLayout>
  );
}

export default OurTrackRecord;
