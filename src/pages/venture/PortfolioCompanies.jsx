import CompanyCard1 from '../../components/card/CompanyCard1';
import BodyBase from '../../components/text/BodyBase';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
const card = [
  '#e58600',
  '#180062',
  '#9741ff',
  '#4C3838',
  '#5A6B05',
  '#d66472',
  '#FF4141',
  '#4187FF',
  '#009089',
];

function PortfolioCompanies() {
  return (
    <SectionLayout bg={`bg-bg-secondary`}>
      <Title>Portfolio companies</Title>
      <BodyBase fontWeight={`font-normal`} extraClass={`tab:w-[70%] pt-2.5`}>
        The Fund is actively investing and has built a portfolio that includes some of the top
        Artificial Intelligence, Machine Learning, and Data Infrastructure companies in the world.
      </BodyBase>
      <div className="my-10 grid sm:grid-cols-2 tab:grid-cols-3 gap-12 items-stretch">
        {card.map((item, index) => (
          <CompanyCard1 key={index} innerBg={item} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default PortfolioCompanies;
