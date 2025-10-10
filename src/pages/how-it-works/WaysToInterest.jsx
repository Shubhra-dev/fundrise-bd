import SectionLayout from '../../ui/SectionLayout';
import Title from '../../components/text/Title';
import TextBoxWhyFundrise from '../../components/box/TextBoxWhyFundrise';
function WaysToInterest() {
  return (
    <SectionLayout>
      <Title>
        Ways to <span className="text-btext-3-dark">invest</span>
        <div className="mt-[60px] grid sm:grid-cols-2 tab:grid-cols-3 items-stretch justify-normal gap-[30px]">
          <TextBoxWhyFundrise
            heading={true}
            title={`Personal investment account`}
            borderColor="border-border-primary"
            link={`Open your account`}
            bg="bg-gradient-to-r from-bg-soft-orchid-base to-bg-blush-mist-base"
            text={`Open a standard account and build a portfolio of alternative investments.`}
          />
          <TextBoxWhyFundrise
            heading={true}
            title={`Tax-advantaged investing`}
            borderColor="border-border-primary"
            link={`Invest in your retirement`}
            bg="bg-gradient-to-r from-bg-soft-orchid-base to-bg-blush-mist-base"
            text={`Roll over an existing retirement account or open a new Traditional or Roth IRA.`}
          />
          <TextBoxWhyFundrise
            heading={true}
            title={`Through your advisor`}
            borderColor="border-border-primary"
            link={`Learn More`}
            bg="bg-gradient-to-r from-bg-soft-orchid-base to-bg-blush-mist-base"
            text={`Work with an RIA? We can give them access to invest on your behalf.`}
          />
        </div>
      </Title>
    </SectionLayout>
  );
}

export default WaysToInterest;
