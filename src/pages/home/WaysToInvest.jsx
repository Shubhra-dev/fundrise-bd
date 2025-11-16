import BottomButtonRoundedBox from '../../components/box/BottomButtonRoundedBox';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';

function WaysToInvest() {
  return (
    <SectionLayout>
      <SubTitle>
        Ways to <span className="text-btext-1-base">invest</span>
      </SubTitle>
      <div className="grid sm:grid-cols-2 tab:grid-cols-3 gap-8 mt-9 sm:items-stretch">
        <BottomButtonRoundedBox
          text={`Open a standard account and build a portfolio of alternative investments.`}
          title={`Personal investment account`}
          buttonLabel={`Open your accounts`}
          link="/auth/register"
        />
        <BottomButtonRoundedBox
          text={`Roll over an existing retirement account or open a new Traditional or Roth IRA.`}
          title={`Tax-advantaged investing`}
          buttonLabel={`Invest your retirement`}
          link="/user/invests"
        />
        <BottomButtonRoundedBox
          text={`Work with an RIA? We can give them access to invest on your behalf.`}
          title={`Through your advisor`}
          buttonLabel={`Learn More`}
          link="/why-fundrise"
        />
      </div>
    </SectionLayout>
  );
}

export default WaysToInvest;
