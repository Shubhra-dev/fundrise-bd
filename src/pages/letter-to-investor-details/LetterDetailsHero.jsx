import BodyBase from '../../components/text/BodyBase';
import BodySmall from '../../components/text/BodySmall';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import Blog1 from '../../assets/Blog1.png';
function LetterDetailsHero({ data }) {
  return (
    <SectionLayout>
      <SubTitle>{data.title}</SubTitle>
      <BodyBase extraClass={`pt-3 pb-4`}>{data.excerpt}</BodyBase>
      <BodySmall textColor={`text-btext-1-base`}>
        By {data.author_name} | {data.created_at}
      </BodySmall>
      <div className="my-[45px]">
        <img
          src={data.featured_image}
          alt="blog image"
          className="w-full h-60 sm:h-[400px] object-fill"
        />
      </div>
      <BodyBase fontWeight={`font-light`} textColor={`text-sub-heading`}>
        Note: The original investor letter was published April 2, 2025 before the announcement of
        the U.S. new tariff policies, however we feel the events of the past week only further
        support the majority of the forecasts shared below.
      </BodyBase>
    </SectionLayout>
  );
}

export default LetterDetailsHero;
