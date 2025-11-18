import SectionLayout from '../../ui/SectionLayout';
import ClientReturnHeroBg from '../../assets/ClientReturnHero.png';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import BodyBase from '../../components/text/BodyBase';
import { Link } from 'react-router-dom';
function ClientReturnHero() {
  return (
    <SectionLayout rounded="rounded-t-[30px]">
      <div className="flex flex-col tab:flex-row items-start justify-normal gap-10 laptop:gap-[50px]">
        <div className="tab:w-[40%] bgLap:w-1/2 p-2.5">
          <img src={ClientReturnHeroBg} alt="hero image" className="w-full object-center" />
        </div>
        <div className="tab:w-[60%] bgLap:w-1/2">
          <SubHeading extraClass={`uppercase`} tracking={`tracking-widest`}>
            advisory client returns
          </SubHeading>
          <Title extraClass={`pt-[15px] pb-2.5`}>Diversification that delivers</Title>
          <BodyBase fontWeight={`font-normal`}>
            Diversifying outside of the public market not only helps in managing risk through
            non-correlated investments, but also opens up an opportunity for potentially higher
            returns and strategic investment advantages, thus playing a crucial role in a
            comprehensive investment strategy.
          </BodyBase>
          <div className="pt-10 flex items-center justify-center sm:justify-normal gap-5 laptop:gap-[30px] w-full">
            <Link to={`/auth/register`}>
              <PrimaryButton
                label="Sign Up"
                bg="bg-bg-dusky-plum-base hover:bg-bg-dusky-plum-light hover:text-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ClientReturnHero;
