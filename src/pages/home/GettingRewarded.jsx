import SubTitle from '../../components/text/SubTitle';
import SubHeading from '../../components/text/SubHeading';
import SectionLayout from '../../ui/SectionLayout';
import BuildingIcon from '../../assets/icons/Building_02.svg';
import UsersIcon from '../../assets/icons/Users_Group.svg';
import IconBox from '../../components/box/IconBox';
function GettingRewarded() {
  return (
    <SectionLayout>
      <div className="flex flex-col tab:flex-row tab:items-center justify-between gap-10">
        <SubTitle font={`font-display`} extraClass={`tab:w-1/2`}>
          Get rewarded for growing with Fundrise
        </SubTitle>
        <SubHeading fontWeight={`font-normal`} extraClass={`tab:w-1/2`}>
          Unlock exclusive benefits when you invest $100,000 or more
        </SubHeading>
      </div>
      <div className="mt-[50px] flex flex-col tab:flex-row tab:items-center justify-between gap-8 laptop:gap-0">
        <IconBox title={`Exclusive investments`} text={`Access unique and opportunistic offerings`}>
          <img src={BuildingIcon} alt="building" />
        </IconBox>
        <IconBox
          title={`White-glove support`}
          text={`Get dedicated, priority service from our expert teams`}
        >
          <img src={UsersIcon} alt="users" />
        </IconBox>
        <IconBox
          title={`12-month fee waiver`}
          sign={`*`}
          text={`Enjoy a year with no advisory fees (0.15%)`}
        >
          <img src={BuildingIcon} alt="building" />
        </IconBox>
      </div>
    </SectionLayout>
  );
}

export default GettingRewarded;
