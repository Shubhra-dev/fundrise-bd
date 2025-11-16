import { useEffect, useState } from 'react';
import { FiAlertTriangle, FiLoader } from 'react-icons/fi';
import SectionLayout from '../../ui/SectionLayout';
import AboutHero from './AboutHero';
import SetBetterWay from './SetBetterWay';
import ServiceBg from '../../assets/ServiceTitan1.jpg';
import Aurora from '../../assets/Aurora.png';
import TextBoxStats from './TextBoxStats';
import CaptionSmall from '../../components/text/CaptionSmall';
import SubTitle from '../../components/text/SubTitle';
import BodySmall from '../../components/text/BodySmall';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Heading from '@/components/text/Heading';
import { getAboutUsData } from '@/services/pages';
import HelpCenterHero from '@/pages/help-center/HelpCenterHero';

function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchAboutUsData = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await getAboutUsData();
        if (!isMounted) return;
        setData(response?.result || null);
      } catch (error) {
        if (!isMounted) return;
        setIsError(error?.message || 'Unable to load About Us content');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchAboutUsData();

    return () => {
      isMounted = false;
    };
  }, []);

  const shouldRenderContent = !isLoading && !isError;

  return (
    <>
      <AboutHero />
      <HelpCenterHero search={search} setSearch={setSearch} />
      {isLoading && (
        <SectionLayout>
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <FiLoader className="text-4xl text-btext-1-base animate-spin" />
            <Heading align="text-center">Loading About Us</Heading>
            <BodySmall textColor="text-btext-2-base" align="text-center">
              Please hold on while we prepare the details.
            </BodySmall>
          </div>
        </SectionLayout>
      )}
      {!isLoading && isError && (
        <SectionLayout>
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <FiAlertTriangle className="text-4xl text-error-base" />
            <Heading textColor="text-error-base" align="text-center">
              Something went wrong
            </Heading>
            <BodySmall textColor="text-btext-2-base" align="text-center">
              {isError}
            </BodySmall>
          </div>
        </SectionLayout>
      )}
      {shouldRenderContent && (
        <>
          <SetBetterWay data={data?.about_us} />
          <SectionLayout overlay={true} bgImg={ServiceBg}>
            <div
              className="-mt-[200px] px-12 tab:px-[60px] pt-8 tab:pt-[40px] pb-5 bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${Aurora})` }}
            >
              <div className="mt-6 tab:mt-10 mb-10 tab:mb-16 flex flex-col sm:flex-row items-center sm:items-start tab:items-center justify-between gap-14">
                <TextBoxStats detail={`Active investor`} title={data?.about_us.active_investors} />
                <TextBoxStats
                  detail={`Total portfolio value*`}
                  title={data?.about_us.total_portfolio_value}
                />
                <TextBoxStats
                  detail={`Net dividends earned by investors`}
                  title={data?.about_us.net_dividends_earned_by_investors}
                />
              </div>
              <CaptionSmall textColor={`text-white`} align={`text-center`}>
                *Total real estate value of projects invested in since inception of Rise Companies
                Corp sponsored real estate investment programs, as of 12/31/2023.
              </CaptionSmall>
            </div>
            <div className="mt-12 w-9/10 tab:w-2/3 m-auto">
              <SubTitle textColor={`text-white`} align={`text-center`}>
                Come work with us
              </SubTitle>
              <BodySmall textColor={`text-white`} align={`text-center`} extraClass={`mt-5`}>
                Fundrise is headquartered in the Dupont Circle area of Washington, DC. We've been
                recognized as one of the Washington Post's Top Workplaces, and named to the Forbes
                Fintech 50 three times. <br />
                We look for low-ego, results-driven people with a penchant for bold ideas and an
                obsession with solving problems for our investors.
              </BodySmall>
              <div className="w-max m-auto mt-12">
                <PrimaryButton label="Learn More" />
              </div>
            </div>
          </SectionLayout>
        </>
      )}
    </>
  );
}

export default AboutUs;
