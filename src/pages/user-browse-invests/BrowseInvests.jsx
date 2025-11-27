import RoundedButton from '@/components/buttons/RoundedButton';
import BodyBase from '@/components/text/BodyBase';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import CaptionSmall from '@/components/text/CaptionSmall';
import SubTitle from '@/components/text/SubTitle';
import InvestCard from '@/pages/user-browse-invests/InvestCard';
import DashboardLayout from '@/pages/user-dashboard/DashboardLayout';
import { getBrowseInvests } from '@/services/investment';
import { useEffect, useState } from 'react';

function BrowseInvests() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [investData, setInvestData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await getBrowseInvests();
        setInvestData(response.result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout activeTab={1}>
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-16 h-16 relative">
            <div className="w-full h-full border-4 border-icon-brand-3 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <CaptionSmall textColor="text-sub-heading" extraClass="mt-4">
            Loading your portfoilio...
          </CaptionSmall>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout activeTab={1}>
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh] p-5">
          <div className="w-full max-w-md rounded-[10px] border border-error p-6 bg-error/5">
            <SubTitle extraClass="text-error text-center mb-2">Oops!</SubTitle>
            <CaptionSmall textColor="text-sub-heading" extraClass="text-center">
              {error}
            </CaptionSmall>
            <RoundedButton
              variant="primary"
              extraClass="mt-4 mx-auto"
              onClick={() => window.location.reload()}
              label="Try Again"
            />
          </div>
        </div>
      </DashboardLayout>
    );
  }
  if (!error && !isLoading) {
    return (
      <DashboardLayout activeTab={9}>
        <BodyBase fontWeight={`font-bold`}>Real Estate Funds</BodyBase>
        <CaptionExtraSmall extraClass={`mt-[5px]`}>
          These publicly registered funds are our largest and most diversified, and are akin to
          mutual funds of alternative assets.
        </CaptionExtraSmall>
        <div className="mt-10">
          {investData.projects.map((item, index) => (
            <InvestCard key={index} project={item} />
          ))}
        </div>
        <div className="mt-10 py-5 border-t border-t-border-primary">
          <CaptionExtraSmall>
            Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps
            (the “Platform“). By using the Platform, you accept our Terms of Service and Privacy
            Policy. All images and return and projection figures shown are for illustrative purposes
            only, may assume additional investments over time, and are not actual Fundrise customer
            or model returns or projections. Past performance is no guarantee of future results. Any
            historical returns, expected returns, or probability projections may not reflect actual
            future performance. All securities involve risk and may result in partial or total loss.
            While the data we use from third parties is believed to be reliable, we cannot ensure
            the accuracy or completeness of data provided by investors or other third parties.
            Neither Fundrise nor any of its affiliates provide tax advice and do not represent in
            any manner that the outcomes described herein will result in any particular tax
            consequence. Prospective investors should confer with their personal tax advisors
            regarding the tax consequences based on their particular circumstances. Neither Fundrise
            nor any of its affiliates assume responsibility for the tax consequences for any
            investor of any investment.{' '}
            <a href="" className="text-btext-1-dark underline">
              Full Disclosure
            </a>{' '}
            <br />
            <br />
            The publicly filed offering circulars of the issuers sponsored by Rise Companies Corp.,
            not all of which may be currently qualified by the Securities and Exchange Commission,
            may be found at fundrise.com/oc. For investors and potential investors who are residents
            of the State of Washington, please send all correspondence, including any questions or
            comments, to washingtonstate@fundrise.com. <br />
            <br />
            Fundrise takes any potential security issues seriously, and encourages the responsible
            and timely reporting of unknown security issues. Please send any discovered security
            concerns to © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are
            trademarks of Rise Companies Corp. Proudly designed and coded in Washington, D.C. <br />
            <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are
            trademarks of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
          </CaptionExtraSmall>
        </div>
      </DashboardLayout>
    );
  }
}

export default BrowseInvests;
