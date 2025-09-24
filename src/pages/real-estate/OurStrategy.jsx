import BodyBase from '../../components/text/BodyBase';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import CaptionSmall from '../../components/text/CaptionSmall';
import SectionLayout from '../../ui/SectionLayout';
import NoteBook from '../../assets/icons/Notebook.svg';
import FileCheck from '../../assets/icons/FileCheck.svg';
import Archive from '../../assets/icons/Archive.svg';
import BuildingPurple from '../../assets/icons/Building_04_purple.svg';
import ChartLinePurple from '../../assets/icons/ChartLinePurple.svg';
import RealEstateHeroBg from '../../assets/RealEstateHero.jpg';
import BodySmall from '../../components/text/BodySmall';
import { FiArrowUpRight } from 'react-icons/fi';
function IconBox({ img, text, count }) {
  return (
    <div className="flex items-start justify-normal gap-2.5">
      <img src={img} alt="icon" />
      <div>
        <Heading textColor={`text-btext-3-dark`} leading={`leading-tight`}>
          {count}
        </Heading>
        <CaptionSmall>{text}</CaptionSmall>
      </div>
    </div>
  );
}
function TextAndImageSection({
  imagePosition = 'right',
  subHeading,
  heading,
  text,
  image1,
  image2,
  linkText,
  children,
}) {
  return (
    <div
      className={`my-[70px] flex  ${imagePosition === 'right' ? ' flex-col-reverse tab:flex-row' : 'flex-col tab:flex-row-reverse'} items-center justify-normal gap-5 sm:gap-10`}
    >
      <div className="w-full tab:w-1/2">
        <CaptionSmall textColor={`text-btext-3-dark`}>{subHeading}</CaptionSmall>
        <div className="my-7">
          <Heading>{heading}</Heading>
          <CaptionSmall extraClass={`mt-3`}>{text}</CaptionSmall>
        </div>
        {children}
      </div>
      <div className="w-full tab:w-1/2">
        <div className="flex items-center justify-normal gap-9">
          <img
            src={image1}
            alt="image"
            className="basis-1/2 min-w-0 h-36 sm:h-64 chamfer-tr-5 rounded-md"
          />
          <img
            src={image2}
            alt="image"
            className="basis-1/2 min-w-0 h-36 sm:h-64 chamfer-tr-5 rounded-md"
          />
        </div>
        <button className="flex items-center justify-normal gap-2 w-full mt-5 group">
          <BodySmall
            fontWeight={`font-bold`}
            font={`font-display`}
            extraClass={`group-hover:underline w-[92%] sm:w-auto`}
          >
            {linkText}
          </BodySmall>
          <FiArrowUpRight className="text-xl w-[8%] sm:w-auto" />
        </button>
      </div>
    </div>
  );
}
function OurStrategy() {
  return (
    <SectionLayout>
      <div className="flex flex-col tab:flex-row items-end justify-normal gap-5 sm:gap-[37px]">
        <div className="w-full tab:w-1/2">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            our strategies
          </SubHeading>
          <Title extraClass={`pt-[15px] pb-2.5`}>Designed to harness the market's  potential</Title>
          <BodyBase fontWeight={`font-normal`}>
            By employing a combination of strategies, we aim to build well-rounded, resilient
            portfolios targeted to deliver consistently strong results based on our clients' goals
            and appetite for risk.
          </BodyBase>
        </div>
        <div className="w-full tab:w-1/2 flex items-start justify-normal gap-8">
          <IconBox img={NoteBook} count={`224`} text={`Active projects`} />
          <IconBox img={FileCheck} count={`235`} text={`Completed projects`} />
          <IconBox img={Archive} count={`$7+ B`} text={`Total portfolio value*`} />
        </div>
      </div>
      <TextAndImageSection
        subHeading={`Apartment`}
        heading={`Build-for-rent`}
        linkText={`Read more about our recent partnership with Saltbox`}
        image1={RealEstateHeroBg}
        image2={RealEstateHeroBg}
        text={`A variety of trends have now led to a good share of the population in need of more living space which they can rent for some time. Currently, this demand for single-family rentals (SFRs) has helped drive a level of asset price appreciation uncommon in the world of real estate. By purchasing these homes in volume directly from homebuilders and leasing them up ourselves as stabilized communities, we believe we can get better prices—and returns—than buying the “finished product.”`}
      >
        <div className="flex items-center justify-normal gap-9">
          <IconBox img={BuildingPurple} text={`Single-family homes`} count={`3,471`} />
          <IconBox img={ChartLinePurple} text={`U.S. Markets`} count={`30`} />
        </div>
      </TextAndImageSection>
      <TextAndImageSection
        imagePosition="left"
        subHeading={`Apartment`}
        heading={`Build-for-rent`}
        linkText={`Read more about our recent partnership with Saltbox`}
        image1={RealEstateHeroBg}
        image2={RealEstateHeroBg}
        text={`A variety of trends have now led to a good share of the population in need of more living space which they can rent for some time. Currently, this demand for single-family rentals (SFRs) has helped drive a level of asset price appreciation uncommon in the world of real estate. By purchasing these homes in volume directly from homebuilders and leasing them up ourselves as stabilized communities, we believe we can get better prices—and returns—than buying the “finished product.”`}
      >
        <div className="flex items-center justify-normal gap-9">
          <IconBox img={BuildingPurple} text={`Single-family homes`} count={`3,471`} />
          <IconBox img={ChartLinePurple} text={`U.S. Markets`} count={`30`} />
        </div>
      </TextAndImageSection>
      <TextAndImageSection
        subHeading={`Apartment`}
        heading={`Build-for-rent`}
        linkText={`Read more about our recent partnership with Saltbox`}
        image1={RealEstateHeroBg}
        image2={RealEstateHeroBg}
        text={`A variety of trends have now led to a good share of the population in need of more living space which they can rent for some time. Currently, this demand for single-family rentals (SFRs) has helped drive a level of asset price appreciation uncommon in the world of real estate. By purchasing these homes in volume directly from homebuilders and leasing them up ourselves as stabilized communities, we believe we can get better prices—and returns—than buying the “finished product.”`}
      >
        <div className="flex items-center justify-normal gap-9">
          <IconBox img={BuildingPurple} text={`Single-family homes`} count={`3,471`} />
          <IconBox img={ChartLinePurple} text={`U.S. Markets`} count={`30`} />
        </div>
      </TextAndImageSection>
    </SectionLayout>
  );
}

export default OurStrategy;
