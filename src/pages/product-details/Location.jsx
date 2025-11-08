import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import OsmMap from '../../ui/OsmMap';
import BodySmall from '../../components/text/BodySmall';
function Location({ projectData }) {
  const dmsToDecimal = (dms) => {
    const [_, deg, min, sec, dir] = dms.match(/(\d+)°(\d+)'([\d.]+)"([NSEW])/);
    let dec = +deg + +min / 60 + +sec / 3600;
    return /[SW]/.test(dir) ? -dec : dec;
  };

  // Example:
  const lat = dmsToDecimal(projectData?.location.latitude);
  const lon = dmsToDecimal(projectData?.location.longitude);
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`location`}>
      <SubHeading>Location</SubHeading>
      <BodySmall textColor={`text-sub-heading`} extraClass={`mt-1.5 mb-4`}>
        {projectData?.address}
      </BodySmall>
      <OsmMap
        center={[lat, lon]}
        zoom={12}
        height="360px"
        className="bg-gray-500"
        markerLabel={projectData?.name}
      />
    </SectionLayout>
  );
}

export default Location;
