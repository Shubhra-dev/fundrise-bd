import BodySmall from '../../components/text/BodySmall';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import Focus from '../../assets/Focus.png';

function AboutOurStrategy() {
  return (
    <SectionLayout bg={`bg-bg-primary-2`}>
      <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
        about our strategy
      </SubHeading>
      <div className="flex flex-col sm:flex-row tab:items-end justify-normal gap-5 tab:gap-20">
        <div className="w-full tab:w-[40%] bglap:w-[35%] mt-[15px]">
          <SubTitle>Market dislocation creates opportunity</SubTitle>
        </div>
        <SubTitle extraClass={`hidden tab:block w-full sm:w-1/2 tab:w-[60%] bglap:w-[65%]`}>
          Funding the gap
        </SubTitle>
      </div>

      <div className="flex flex-col tab:flex-row mt-5 items-start justify-normal gap-5 tab:gap-20">
        <BodySmall extraClass={`w-full tab:w-[40%] bglap:w-[35%]`}>
          The opportunities created by the Great Deleveraging are unique in that nearly every
          borrower and every asset (regardless of credit quality) are impacted, hence the name
          “Great.” No matter who you are, if you were active in business over the past several years
          then you were inevitably borrowing to some extent. And if you were borrowing at all, then
          you were borrowing at low rates and relatively high asset values. <br />
          <br />
          Now that the environment has shifted, regardless of the quality of the underlying asset,
          as loans mature and come due, there will be a gap created during the refinancing period
          where new equity capital must come in to pay down the overall size of the loan.
        </BodySmall>
        <div className="w-full tab:w-[60%] bglap:w-[65%]">
          <SubTitle extraClass={`tab:hidden w-full`}>Funding the gap</SubTitle>
          <BodySmall extraClass={`mt-5 tab:mt-0`}>
            Our strategy is to focus on bridging the funding gap and providing rescue capital to
            borrowers in the midst of the liquidity crunch. By lending into the gap, we are able to
            invest at a healthy margin of safety, concentrating on high-quality assets with
            creditworthy borrowers—those who are experiencing circumstantial liquidity needs as a
            result of interest rates rising so rapidly through 2022 and 2023. <br />
            <br />
            In these instances, the underlying assets themselves are typically unaffected by the
            financial turbulence happening in capital markets. Most frequently, the borrower is in
            the middle of a business plan to enhance the value of the property, such as new
            construction, renovations, or lease-up, and simply needs more time to reach
            stabilization and be ready for long-term, fixed-rate debt. <br />
            <br />
            Examples of this kind of activity include:
          </BodySmall>
          <ul className="list-inside list-disc text-base font-sans mt-2 text-paragraph">
            <li>
              Originating and structuring real estate loans, including senior mortgage loans and
              subordinated mortgage loans
            </li>
            <li>
              Providing mezzanine financing in the form of preferred equity, B-notes, or second
              trusts
            </li>
            <li>
              Sizing the mezzanine or preferred loans to a GSE (e.g. Fannie Mae or Freddie Mac) exit
            </li>
            <li>Financing residential construction and development</li>
            <li>
              Acquiring subordinate notes and high-yield investments in the asset backed securities
              market,—single family rental portfolios, in particular
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mt-9 flex-col tab:flex-row items-center justify-normal gap-5 tab:gap-7">
        <div className="w-full tab:w-1/2 bglap:w-[40%]">
          <SubTitle>Focusing on the markets we know best</SubTitle>
          <BodySmall extraClass={`mt-5`}>
            In terms of location, we will primarily target high-growth markets in the Sunbelt like
            Dallas-Fort Worth, Phoenix, Orlando, Tampa, Houston, Atlanta, Charleston, and Las Vegas.
            These are the markets we know the best: approximately 70% of all Fundrise acquisitions
            from 2021-2022 were in the four fastest-growing states—Texas, Florida, North Carolina,
            and Georgia—and more than 90% were within the Sunbelt. We believe that by maintaining
            rigorous credit underwriting with a heavy emphasis on residential rental properties, we
            have the opportunity to achieve some of the best relative risk-adjusted returns since
            the aftermath of the Great Recession in 2008.
          </BodySmall>
        </div>
        <img src={Focus} alt="focusing image" className="w-full tab:w-1/2 bgLap:w-[60%]" />
      </div>
    </SectionLayout>
  );
}

export default AboutOurStrategy;
