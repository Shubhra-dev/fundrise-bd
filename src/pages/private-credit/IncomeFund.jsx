import { FiArrowUpRight } from 'react-icons/fi';
import SubHeading from '../../components/text/SubHeading';
import SubTitle from '../../components/text/SubTitle';
import SectionLayout from '../../ui/SectionLayout';
import TrackRecod from '../../assets/TrackRecod.jpg';
import BodySmall from '../../components/text/BodySmall';
import BodyBase from '../../components/text/BodyBase';
import House from '../../assets/icons/House.svg';
import VerticalChart from '../../assets/icons/VerticalChart.svg';
import Pie from '../../assets/icons/Pie.svg';
import BuildingBlue from '../../assets/icons/BuildingBlue.svg';
import Dollar from '../../assets/icons/Dollar.svg';
function IconBox({ img, text }) {
  return (
    <div className="flex items-center justify-normal gap-5">
      <img src={img} alt="icon" />
      <BodyBase>{text}</BodyBase>
    </div>
  );
}

function IncomeFund() {
  return (
    <SectionLayout>
      <div className="flex items-start justify-normal gap-3.5">
        <div className="w-[28%]">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            Featured fund
          </SubHeading>
          <SubTitle textColor={`text-btext-2-dark`}>Income Fund</SubTitle>
          <div className="mt-8">
            <SubHeading extraClass={`uppercase`} fontWeight={`font-semibold`}>
              Asset types
            </SubHeading>
            <div className="mt-3 flex flex-col items-start gap-4">
              <IconBox img={House} text={`Homebuilder finance`} />
              <IconBox img={Dollar} text={`Real estate debt`} />
              <IconBox img={VerticalChart} text={`Preferred equity`} />
              <IconBox img={Pie} text={`Public REIT equities`} />
              <IconBox img={BuildingBlue} text={`Multifamily`} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-col sm:flex-row items-center justify-normal gap-10 laptop:gap-[50px]">
        <img
          src={TrackRecod}
          alt="hero image"
          className=" rounded-md sm:w-[30%] tab:w-[40%] bgLap:w-1/2 chamfer-tr-6 h-60 sm:h-96"
        />
        <div className="tab:w-[60%] bgLap:w-1/2">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            example project
          </SubHeading>
          <SubTitle textColor={`text-btext-2-dark`} extraClass={`pt-[15px]`}>
            Waypoint
          </SubTitle>
          <BodySmall fontWeight={`font-normal`} extraClass={`py-5`}>
            As part of our new private credit strategy, we’ve invested roughly $20.8 million to
            provide financing in the form of preferred equity for the development of the Mason at
            Daytona Beach, a 300-unit multifamily community on 65.4 acres of centrally located land
            in Daytona Beach, Florida. Under the terms of the investment agreement, the borrower has
            agreed to pay us a 13.5% fixed annual rate that will accrue for as long as it takes to
            finish the project, and our investment will be paid back upon its completion. This is
            one of many projects in the Income Fund's Portfolio.
          </BodySmall>
          <div className="cursor-pointer flex items-center justify-normal gap-2">
            <BodySmall
              fontWeight={`font-bold`}
              textColor={`text-btext-2-dark`}
              font={`font-display`}
            >
              Read the full update
            </BodySmall>
            <FiArrowUpRight className="text-btext-2-dark font-bold" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default IncomeFund;
