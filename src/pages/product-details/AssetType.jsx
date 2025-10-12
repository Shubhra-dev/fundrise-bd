import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import AssetTypeImage from '../../assets/AssetType.png';
import Heading from '../../components/text/Heading';
import BodySmall from '../../components/text/BodySmall';
function AssetType() {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`asset-type`}>
      <SubHeading>Asset Type</SubHeading>
      <div className="mt-4 p-5 sm:p-[30px] rounded-xl border border-border-primary flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-normal gap-5 sm:gap-1">
        <div className="sm:w-2/3 tab:w-5/6">
          <Heading>Preferred equity</Heading>
          <BodySmall extraClass={`mt-4`}>
            A preferred equity investment typically gives an investor a higher claim on the
            property's cash flows but, in the event of a liquidation, places the investor below debt
            holders (like banks or other senior lenders). Preferred equity typically earns a fixed
            return, often in the form of regular dividends, which is paid out before any
            distributions to common equity investors. These returns typically are higher than what
            you would earn on senior debt. Preferred equity is an attractive investment option when
            looking for predictable income with compelling rates.
          </BodySmall>
        </div>
        <img src={AssetTypeImage} alt="asset type" className="sm:w-1/3 h-48 tab:h-auto tab:w-1/6" />
      </div>
    </SectionLayout>
  );
}

export default AssetType;
