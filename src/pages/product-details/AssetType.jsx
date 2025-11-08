import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import AssetTypeImage from '../../assets/AssetType.png';
import Heading from '../../components/text/Heading';
import BodySmall from '../../components/text/BodySmall';
function AssetType({ projectData }) {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`asset-type`}>
      <SubHeading>Asset Type</SubHeading>
      <div className="mt-4 p-5 sm:p-[30px] rounded-xl border border-border-primary flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-normal gap-5 sm:gap-1">
        <div className="sm:w-2/3 tab:w-5/6">
          <Heading>{projectData?.title}</Heading>
          <BodySmall extraClass={`mt-4`}>
            <div dangerouslySetInnerHTML={{ __html: projectData?.details }} />
          </BodySmall>
        </div>
        <img src={AssetTypeImage} alt="asset type" className="sm:w-1/3 h-48 tab:h-auto tab:w-1/6" />
      </div>
    </SectionLayout>
  );
}

export default AssetType;
