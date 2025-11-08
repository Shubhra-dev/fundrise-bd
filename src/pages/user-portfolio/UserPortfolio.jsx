import { useEffect, useState } from 'react';
import CaptionSmall from '../../components/text/CaptionSmall';
import Title from '../../components/text/Title';
import DashboardLayout from '../user-dashboard/DashboardLayout';
import AssetValue from '../../assets/AssetValue.png';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import PortfolioBreakdown from './PortfolioBreakdown';
import { getPortfolioIndex } from '@/services/portfolio';
import RoundedButton from '@/components/buttons/RoundedButton';

function UserPortfolio() {
  const [activeTab, setActiveTab] = useState('value');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await getPortfolioIndex();
        setPortfolioData(response.result);
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
            <Title extraClass="text-error text-center mb-2">Oops!</Title>
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

  return (
    <DashboardLayout activeTab={2}>
      <div className="flex flex-col sm:flex-row items-stretch justify-normal gap-10">
        <div className="w-full sm:w-2/5 tab:w-1/3">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('value')}
              className={`px-4 py-2 text-xl font-display font-semibold ${
                activeTab === 'value'
                  ? 'text-btext-1-dark border-b-2 border-btext-1-dark'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Value
            </button>
            <button
              onClick={() => setActiveTab('netReturn')}
              className={`px-4 py-2 text-xl font-display font-semibold ${
                activeTab === 'netReturn'
                  ? 'text-btext-1-dark border-b-2 border-btext-1-dark'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Net Return
            </button>
          </div>

          <div className={activeTab === 'value' ? 'block' : 'hidden'}>
            <CaptionSmall textColor={`text-sub-heading`}>Initial Investment Amount</CaptionSmall>
            <Title extraClass={`mt-3`}>${portfolioData.value.initial_investment_amount}</Title>
            <div className="mt-10 px-[5px] py-2.5 flex justify-between">
              <CaptionSmall fontWeight={`font-bold`} textColor={`text-sub-heading`}>
                Net Contribution
              </CaptionSmall>
              <CaptionSmall
                fontWeight={`font-bold`}
                textColor={`text-sub-heading`}
                align={`text-end`}
              >
                ${portfolioData.value.net_contribution}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between">
              <CaptionSmall textColor={`text-sub-heading`}>Gross dividends</CaptionSmall>
              <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
                ${portfolioData.value.gross_dividends}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between">
              <CaptionSmall textColor={`text-sub-heading`}>Appreciation</CaptionSmall>
              <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
                ${portfolioData.value.appreciation}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between">
              <CaptionSmall textColor={`text-sub-heading`}>Advisory fee</CaptionSmall>
              <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
                ${portfolioData.value.advisory_fee}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between border-t border-t-black">
              <CaptionSmall fontWeight={`font-medium`} textColor={`text-sub-heading`}>
                Net return
              </CaptionSmall>
              <CaptionSmall
                fontWeight={`font-medium`}
                textColor={`text-sub-heading`}
                align={`text-end`}
              >
                ${portfolioData.value.net_return_amount}
              </CaptionSmall>
            </div>
          </div>

          <div className={activeTab === 'netReturn' ? 'block' : 'hidden'}>
            <CaptionSmall textColor={`text-sub-heading`}>Net Return Percentage</CaptionSmall>
            <Title extraClass={`mt-3`}>{portfolioData.net_return.net_return_percentage}%</Title>
            <div className="mt-10 px-[5px] py-2.5 flex justify-between">
              <CaptionSmall fontWeight={`font-bold`} textColor={`text-sub-heading`}>
                Net Return Amount
              </CaptionSmall>
              <CaptionSmall
                fontWeight={`font-bold`}
                textColor={`text-sub-heading`}
                align={`text-end`}
              >
                ${portfolioData.net_return.net_return_amount}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between">
              <CaptionSmall textColor={`text-sub-heading`}>Gross Dividends</CaptionSmall>
              <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
                ${portfolioData.net_return.gross_dividends}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between">
              <CaptionSmall textColor={`text-sub-heading`}>Appreciation</CaptionSmall>
              <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
                ${portfolioData.net_return.appreciation}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between">
              <CaptionSmall textColor={`text-sub-heading`}>Advisory Fee</CaptionSmall>
              <CaptionSmall textColor={`text-sub-heading`} align={`text-end`}>
                ${portfolioData.net_return.advisory_fee}
              </CaptionSmall>
            </div>
            <div className="px-[5px] py-2.5 flex justify-between border-t border-t-black">
              <CaptionSmall fontWeight={`font-medium`} textColor={`text-sub-heading`}>
                Dividends
              </CaptionSmall>
              <CaptionSmall
                fontWeight={`font-medium`}
                textColor={`text-sub-heading`}
                align={`text-end`}
              >
                ${portfolioData.net_return.dividends}
              </CaptionSmall>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/5 tab:w-2/3 flex flex-col gap-5 items-center justify-center c">
          <img src={AssetValue} alt="" />
          <CaptionExtraSmall textColor={`text-sub-heading`}>
            Your account value chart will be available a week after order completion.
          </CaptionExtraSmall>
        </div>
      </div>
      <PortfolioBreakdown />
      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Performance calculations are performed using the Modified Dietz method, which is used to
          measure the performance of your account, portfolio, or security in the presence of inflows
          and outflows, such as contributions, distributions, transfers, or redemptions. Returns for
          time periods longer than 365 days are annualized using a simple average. <br />
          <br />
          The return calculation for a period includes dividends earned (whether paid or unpaid),
          plus realized and unrealized gains or losses as a result of any changes in the net asset
          value (NAV) of your shares, net of any advisory fees accrued or redemption penalties
          charged. <br />
          <br />
          Performance calculations are for informational purposes only and should not be relied on
          for any other purpose. <br />
          <br />
          The estimated values for the real estate investments are based upon the current estimated
          net asset value per share, which may not accurately reflect the amount that might be paid
          for your shares in a market transaction, and thus are for informational purposes only and
          should not be relied upon for any other purpose. <br />
          <br />
          For shareholders of the Fundrise iPO, the estimated value of your Fundrise iPO shares is
          calculated using the latest per-share offering price. However, please note that the
          Fundrise iPO is a long-term, illiquid investment, and there is presently no market for
          these shares. These estimated values may not accurately reflect the amount that might be
          paid for your shares in a market transaction, and thus are for informational purposes only
          and should not be relied upon for any other purpose. <br />
          <br />
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our 
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Terms of Service 
          </a>
          and{' '}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          . All images and return and projection figures shown are for illustrative purposes only,
          may assume additional investments over time, and are not actual Fundrise customer or model
          returns or projections. Past performance is no guarantee of future results. Any historical
          returns, expected returns, or probability projections may not reflect actual future
          performance. All securities involve risk and may result in partial or total loss. While
          the data we use from third parties is believed to be reliable, we cannot ensure the
          accuracy or completeness of data provided by investors or other third parties. Neither
          Fundrise nor any of its affiliates provide tax advice and do not represent in any manner
          that the outcomes described herein will result in any particular tax consequence.
          Prospective investors should confer with their personal tax advisors regarding the tax
          consequences based on their particular circumstances. Neither Fundrise nor any of its
          affiliates assume responsibility for the tax consequences for any investor of any
          investment. 
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Full Disclosure
          </a>{' '}
          <br />
          <br />
          The publicly filed offering circulars of the issuers sponsored by Rise Companies Corp.,
          not all of which may be currently qualified by the Securities and Exchange Commission, may
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to securitydisclosure@fundrise.com <br />
          <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks
          of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
        </CaptionExtraSmall>
      </div>
    </DashboardLayout>
  );
}

export default UserPortfolio;
