import BodySmall from '../../components/text/BodySmall';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
function LetterHero() {
  return (
    <SectionLayout>
      <Title align={`text-center`}>
        Letters to{' '}
        <span className="bg-gradient-to-r from-btext-3-dark to-btext-4-base bg-clip-text text-transparent">
          Investors
        </span>
      </Title>
      <BodySmall extraClass={`mt-1.5`} align={`text-center`} textColor={`text-sub-heading`}>
        Revisit insights from our leadership team.
      </BodySmall>
    </SectionLayout>
  );
}

export default LetterHero;
