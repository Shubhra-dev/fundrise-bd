import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import Grid1 from '../../assets/Grid1.jpg';
import Grid3 from '../../assets/Grid3.jpg';
import Grid4 from '../../assets/Grid4.jpg';
import Person from '../../assets/Person.svg';
import BodySmall from '../../components/text/BodySmall';

function SetBetterWay() {
  return (
    <SectionLayout rounded="rounded-t-[30px]">
      <div className="flex flex-col-reverse tab:flex-row items-center justify-normal gap-10">
        <div className="w-full tab:w-[60%] bgLap:w-[55%]">
          <SubTitle extraClass={` mb-8`}>We set out to build a better way to invests</SubTitle>
          <BodyBase fontWeight={`font-normal`}>
            Real estate has historically been one of the best performing investment assets and a
            core part of many of the most successful investor’s portfolios. 1 <br /> <br />
            But investing in real estate (the way institutions do) traditionally hasn’t been
            available to most investors without either meeting high net worth requirements or going
            through a complex and inefficient process, riddled with high fees and outdated
            middlemen. 2 <br />
            <br />
            We started Fundrise with a simple idea: to use technology to make high-quality real
            estate investments available to everyone at a low cost. <br /> <br /> In the beginning,
            we faced our fair share of skeptics, especially within the institutional investment
            industry. They said our idea wasn’t possible. Turns out, they were wrong. <br />
            <br />
            Since launching our first offering in 2012, we’ve invested in more than $7 billion worth
            of real estate across the country. Today, we manage more than $2.87 billion of equity on
            behalf of more than 385,000+ individual investors.
          </BodyBase>
        </div>
        <div className="rounded-md w-full tab:w-[40%] bgLap:w-[45%] flex flex-col items-start justify-normal gap-[15px]">
          <div className="flex items-center justify-normal gap-[15px] w-full">
            <img src={Grid4} alt="grid image" className="rounded-xl h-32 object-cover w-1/3" />
            <img src={Grid3} alt="grid image" className="rounded-xl object-cover h-32 w-2/3" />
          </div>
          <img
            src={Grid1}
            alt="grid image"
            className="h-44 sm:h-72 tab:h-[520px] rounded-xl w-full object-cover"
          />
          <div className="flex items-start justify-normal gap-[15px] w-full">
            <img src={Grid4} alt="grid image" className="rounded-xl h-32 object-cover w-2/3 " />
            <img src={Grid4} alt="grid image" className="rounded-xl h-32 object-cover w-1/3" />
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 tab:mt-24 tab:px-10 py-10 sm:py-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 tab:gap-20">
        <div className="w-52 h-52 rounded-full bg-bg-soft-orchid-base relative">
          <img
            src={Person}
            alt="person"
            className="h-44 w-44 rounded-full object-center absolute -bottom-1 -right-2"
          />
        </div>
        <div className="sm:w-2/3">
          <BodyBase>
            “Our goal is to build a better financial system for the individual investor — one that
            is simpler, more reliable, lower cost and transparent.”
          </BodyBase>
          <SubHeading extraClass={`mt-5`} textColor={`text-btext-1-base`} fontWeight={`font-bold`}>
            Ben Millers
          </SubHeading>
          <BodyBase>Co-founder & CEO</BodyBase>
        </div>
      </div>
      <div className="tab:w-3/4 m-auto mb-[200px] sm:mb-[150px] tab:mb-24">
        <BodySmall>
          Although our business and the technology we build has continued to evolve, our mission has
          always remained the same: to empower the individual investor. That’s why we obsess over
          things like cost efficiency, minimizing fees, frequent candid communication, and
          developing smarter tools that provide better insights. <br />
          <br /> Perhaps the clearest manifestation of this investor-first approach is the fact that
          we’re investor-owned, allowing investors in Fundrise real estate portfolios to become
          fellow shareholders of the company itself through our unique iPO model. This lets us
          minimize our dependency on outside capital and better align our long-term interests with
          the long-term interests of our investors — in short, making our success their success.
          <br />
          <br />
          Almost a decade later, we’re still just getting started. Welcome to the future of real
          estate investing.
        </BodySmall>
      </div>
    </SectionLayout>
  );
}

export default SetBetterWay;
