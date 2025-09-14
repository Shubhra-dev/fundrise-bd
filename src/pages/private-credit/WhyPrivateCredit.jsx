import ChamferedBorder from '../../components/box/ChamferedBorder';
import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import Title from '../../components/text/Title';
import SectionLayout from '../../ui/SectionLayout';
import WhyPrivateCreditImg from '../../assets/WhyPrivateCredit.png';
import WhyVen2 from '../../assets/WhyVen2.png';
import BodySmall from '../../components/text/BodySmall';
import SubTitle from '../../components/text/SubTitle';

function WhyPrivateCredit() {
  return (
    <SectionLayout>
      <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
        why private market
      </SubHeading>
      <Title>
        A once-in-a-decade <span className="text-btext-2-dark">lending environment</span>
      </Title>
      <BodyBase fontWeight={`font-normal`} extraClass={`pt-2.5`}>
        The Federal Reserve raised interest rates at record-breaking speeds in 2023 in an attempt to
        tame inflation. This policy shift has destabilized markets, leading to broad dislocations,
        increased strain across the system, and a potential liquidity crisis that presents a risk to
        the global economy. <br /> <br /> Simultaneously, those factors have combined to create what
        we believe is arguably the most attractive environment for credit investments in a
        generation.
      </BodyBase>
      <div className="my-12 flex flex-col tab:flex-row items-center justify-normal gap-10">
        <ChamferedBorder
          borderColor="bg-border-primary"
          width="w-full tab:w-1/2"
          borderRadius="rounded-xl"
          chamferedRadius="6"
        >
          <img
            src={WhyPrivateCreditImg}
            alt="why venture"
            className="chamfer-tr-6 w-full h sm:h-80 tab:h-96 rounded-xl"
          />
        </ChamferedBorder>
        <div className="tab:w-1/2">
          <SubTitle>What is private credit?</SubTitle>
          <BodySmall extraClass={`mt-6`}>
            Private credit (or private lending) is an asset class that consists generally of loans,
            fixed-income, or other structured investments that aim to deliver higher yields with
            lower overall risk when compared to equity investments. In other words, investors in
            private credit are lending money to borrowers in exchange for a fixed rate of return
            (often captured in the form of an interest rate or preferred return) but typically do
            not have any equity ownership or upside participation. Similar to other private market
            assets, private credit differs from publicly traded credit or fixed-income investments,
            such as bonds or asset-backed securities, because it is illiquid and consequently aims
            to deliver a higher relative return.
          </BodySmall>
        </div>
      </div>
      <SubTitle>
        Vast majority of returns accrue in the{' '}
        <span className="text-btext-3-dark">private markets</span>
      </SubTitle>
      <div className="mt-[25px]">
        <BodySmall>
          As a result of the Fed's extraordinary actions, today it's more expensive to borrow money
          for 30 days than for 30 years. This is an unnatural state of affairs that we believe is
          creating a once-in-a-decade liquidity crunch that we're calling The Great Deleveraging.{' '}
          <br /> <br />
          During this period, individuals and companies seeking to borrow money, especially in the
          near term, will be forced to do so at significantly more favorable terms for investors.
          Higher interest rates will generally mean that borrowers will borrow at much lower
          leverage (which means lower risk). Virtually any loan maturing in 2023 will require a
          paydown, and for new loans the gap between the expected and actual proceeds will likely
          require the use of “bridge” or “mezzanine” financing. <br /> <br />
          Meanwhile, investors who have been diligent and chose to maintain larger cash positions
          over the past few years will be in the enviable position of being able to demand
          significantly more return in exchange for providing liquidity during what we expect is
          likely to be a temporary period of realignment. Fundrise is in that position. <br />{' '}
          <br /> Important Note: In our experience, these types of unique investing environments are
          short-lived. Accordingly, our expectation is that the current period of disruption is
          unlikely to last beyond 2024.
        </BodySmall>
      </div>
    </SectionLayout>
  );
}

export default WhyPrivateCredit;
