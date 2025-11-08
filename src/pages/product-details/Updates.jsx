import SectionLayout from '../../ui/SectionLayout';
import Image from '../../assets/Grid4.jpg';
import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { Link } from 'react-router-dom';
function Updates({ projectData }) {
  return (
    <SectionLayout padding={`py-0 pt-0 pb-[50px] sm:pb-[50px] tab:pb-[50px]`} id={`updates`}>
      <SubHeading>Updates</SubHeading>
      {projectData.map((update, index) => (
        <div key={index} className="mt-4 p-5 sm:p-[30px] border border-border-primary rounded-xl">
          <BodyBase fontWeight={`font-bold`} textColor={`text-sub-heading`}>
            {update?.title}
          </BodyBase>
          <BodySmall textColor={`text-sub-heading`} extraClass={`mt-1.5`}>
            {update?.date}
          </BodySmall>
          <BodySmall textColor={`text-sub-heading`} extraClass={`my-4`}>
            {update?.details}
          </BodySmall>
          <div className="bg-bg-primary-2 rounded-3xl p-5 flex items-center justify-normal gap-3 sm:gap-16">
            <div className="w-[65%] sm:w-2/3 tab:w-3/4">
              <BodySmall textColor={`text-sub-heading`}>{update?.post_title}</BodySmall>
              <Link
                to={`/letters-to-investor/details/${update?.post_slug}`}
                className="mt-3 inline-block"
                rel="noopener noreferrer"
              >
                <PrimaryButton textSize="text-sm" label="View Updates" />
              </Link>
            </div>
            <img
              src={update?.post_thumbnail_image}
              alt="image"
              className="w-[35%] h-28 tab:h-32 sm: sm:w-1/3 tab:w-1/4 rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
    </SectionLayout>
  );
}

export default Updates;
