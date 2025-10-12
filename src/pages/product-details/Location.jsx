import SectionLayout from '../../ui/SectionLayout';
import SubHeading from '../../components/text/SubHeading';
import OsmMap from '../../ui/OsmMap';
import BodySmall from '../../components/text/BodySmall';
function Location() {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`location`}>
      <SubHeading>Location</SubHeading>
      <BodySmall textColor={`text-sub-heading`} extraClass={`mt-1.5 mb-4`}>
        Apopka, FL
      </BodySmall>
      <OsmMap
        zoom={12}
        height="360px"
        className="bg-gray-100"
        markerLabel="North Orlando Development
"
      />
    </SectionLayout>
  );
}

export default Location;
