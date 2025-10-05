import TextBoxClientReturn from '../../components/box/TextBoxClientReturn';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import SectionLayout from '../../ui/SectionLayout';

function LettersToInvestor() {
  return (
    <SectionLayout bg={`bg-bg-blush-mist-light`}>
      <SubHeading extraClass={`uppercase mb-4`} tracking={`tracking-widest`}>
        letters to investors
      </SubHeading>
      <Heading>Insights on portfolio performance and market trends</Heading>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 tab:grid-cols-4 gap-2.5 items-stretch justify-normal">
        <TextBoxClientReturn
          text={`In our annual letter to investors, we discuss how falling interest rates over the course
          of the year kicked off what we expect to be an extended period of positive returns for
          real estate (and private markets more broadly), with the potential for even more positive
          tailwinds in 2025.`}
          date={`jan 02, 2025`}
          title={`The case for real estate in 2025`}
        />
        <TextBoxClientReturn
          marked={true}
          text={`Strong operating performance continued across the portfolio with the majority of Funds delivering positive results`}
          date={`Oct 11, 2024`}
          title={`Positive momentum through the quarter with rate cuts continuing to drive value`}
        />
        <TextBoxClientReturn
          text={`After a strong start to the year, continued momentum in property fundamentals led to another quarter of positive returns across the majority of the portfolio.`}
          date={`Aug 02, 2024`}
          title={`Positive second quarter results continue to build on momentum from earlier in the year`}
        />
        <TextBoxClientReturn
          text={`Ongoing improvement in property operations combined with stabilizing rates has driven strong positive performance that we expect to continue.`}
          date={`jan 02, 2025`}
          title={`Strong first quarter results signal rebound for real estate`}
        />
      </div>
    </SectionLayout>
  );
}

export default LettersToInvestor;
