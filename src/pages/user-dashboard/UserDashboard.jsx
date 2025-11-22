import { useState, useEffect, useCallback } from 'react';
import { IoClose, IoLinkSharp } from 'react-icons/io5';
import { LuCircleChevronRight } from 'react-icons/lu';

import CaptionSmall from '../../components/text/CaptionSmall';
import CaptionExtraSmall from '../../components/text/CaptionExtraSmall';
import Title from '../../components/text/Title';
import SubHeading from '../../components/text/SubHeading';
import BodySmall from '../../components/text/BodySmall';
import BodyBase from '../../components/text/BodyBase';

import DashboardLayout from './DashboardLayout';
import PortfolioOverviewCards from './PortfolioOverviewCards';
import Newsfeed from '@/pages/user-dashboard/Newsfeed';

import AssetValue from '../../assets/AssetValue.png';
import Send from '../../assets/icons/Send.svg';
import Calculator from '../../assets/Calculator.png';
import HelpFAQ from '../../assets/HelpFAQ.png';

import RoundedButton from '../../components/buttons/RoundedButton';
import { getDashboardData } from '@/services/dashboard';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  const nav = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getDashboardData();
      setDashboardData(response?.result ?? null);
    } catch (err) {
      console.error('Failed to load dashboard:', err);
      setError(err?.message || 'Failed to load dashboard data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const copyToClipboard = async (inviteUrl) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(inviteUrl);
      } else {
        // Fallback for older browsers / http contexts
        const ta = document.createElement('textarea');
        ta.value = inviteUrl;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Copy failed:', e);
    }
  };

  if (isLoading && !dashboardData) {
    return (
      <DashboardLayout activeTab={1}>
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-16 h-16 relative">
            <div className="w-full h-full border-4 border-icon-brand-3 rounded-full animate-spin border-t-transparent" />
          </div>
          <CaptionSmall textColor="text-sub-heading" extraClass="mt-4">
            Loading your dashboard...
          </CaptionSmall>
        </div>
      </DashboardLayout>
    );
  }

  if (error && !dashboardData) {
    return (
      <DashboardLayout activeTab={1}>
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh] p-5">
          <div className="w-full max-w-md rounded-[10px] border border-error p-6 bg-error/5">
            <Title extraClass="text-error text-center mb-2">Oops!</Title>
            <CaptionSmall textColor="text-sub-heading" extraClass="text-center">
              We couldn&apos;t load your dashboard. Please try again.
            </CaptionSmall>
            <CaptionSmall textColor="text-sub-heading" extraClass="text-center mt-1 opacity-70">
              ({error})
            </CaptionSmall>
            <RoundedButton
              variant="primary"
              extraClass="mt-4 mx-auto"
              onClick={fetchDashboardData}
              label="Try Again"
            />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // If we still don't have data, nothing meaningful to render
  if (!dashboardData) {
    return (
      <DashboardLayout activeTab={1}>
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
          <CaptionSmall textColor="text-sub-heading">No dashboard data available.</CaptionSmall>
        </div>
      </DashboardLayout>
    );
  }

  const inviteUrl = `https://fundrise.com/r?i=${dashboardData.refer_code}`;
  const inviteUrlWithoutProtocol = inviteUrl.replace(/^https?:\/\//, '');
  const portfolioItems = Array.isArray(dashboardData.portfolio_overview)
    ? dashboardData.portfolio_overview
    : [];

  return (
    <DashboardLayout activeTab={1}>
      <div className="w-full flex flex-col sm:flex-row items-stretch justify-normal gap-4 mt-10">
        {/* Left column */}
        <div className="w-full sm:w-2/3">
          {/* Account value */}
          <div className="w-full rounded-[10px] border border-border-primary p-5">
            <CaptionSmall textColor="text-sub-heading">Account value</CaptionSmall>
            <Title extraClass="mt-[14px]">${dashboardData.account_value}</Title>
            <img src={AssetValue} alt="asset value" className="w-36 h-32 m-auto my-11" />
            <CaptionSmall textColor="text-sub-heading">
              Your account value chart will be available a week after order completion. Your
              portfolio is already powered by dozens of properties from across the country.
            </CaptionSmall>
          </div>

          {/* Portfolio overview - mobile */}
          <div className="sm:hidden border border-border-primary rounded-[10px] p-3 tab:p-5 mt-4">
            <div className="flex items-center justify-between mb-4">
              <BodySmall fontWeight="font-bold">Portfolio overview</BodySmall>
              <LuCircleChevronRight />
            </div>
            {portfolioItems.map((item) => (
              <PortfolioOverviewCards
                key={item.project_id || item.project_name}
                pct={Number(item.percentage).toFixed(2)}
                title={item.project_name}
                onClick={() => nav('/user/portfolio')}
              />
            ))}
          </div>

          {/* Share voucher reward */}
          <div className="w-full rounded-[10px] bg-bg-primary-2 border border-icon-brand-3 mt-4 p-5">
            <div className="flex items-center justify-between">
              <CaptionSmall textColor="text-sub-heading" fontWeight="font-bold">
                Share voucher reward
              </CaptionSmall>
              <IoClose className="text-base" />
            </div>
            <div className="mt-[15px] flex flex-col tab:flex-row items-center justify-between gap-4">
              <div className="w-full tab:w-2/3">
                <SubHeading>Invite friends and earn more investment power</SubHeading>
                <CaptionExtraSmall extraClass="mt-2.5">
                  You and your friends can each earn $50 in shares when they invest with your invite
                  link.
                </CaptionExtraSmall>
              </div>
              <img src={Send} alt="send" className="w-1/3" />
            </div>

            <div className="mt-[15px] w-full border border-border-primary rounded-md flex flex-col tab:flex-row justify-between items-center px-3 py-2 gap-3">
              <div className="flex items-center justify-normal gap-2">
                <IoLinkSharp className="text-xl" />
                <CaptionExtraSmall textColor="text-black">
                  {inviteUrlWithoutProtocol}
                </CaptionExtraSmall>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(inviteUrl)}
                className="w-full tab:w-max py-2.5 px-[13px] rounded-md bg-bg-dusky-plum-base text-white font-display font-bold text-sm"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Newsfeed section */}
          <Newsfeed />
        </div>

        {/* Right column */}
        <div className="w-full sm:w-1/3">
          {/* Portfolio overview - desktop */}
          <div className="hidden sm:block border border-border-primary rounded-[10px] p-3 tab:p-5">
            <div className="flex items-center justify-between mb-4">
              <BodySmall fontWeight="font-bold">Portfolio overview</BodySmall>
              <LuCircleChevronRight />
            </div>
            {portfolioItems.map((item) => (
              <PortfolioOverviewCards
                key={item.project_id || item.project_name}
                pct={Number(item.percentage).toFixed(2)}
                title={item.project_name}
                onClick={() => nav('/user/portfolio')}
              />
            ))}
          </div>

          {/* Calculator card */}
          <div className="border border-border-primary rounded-[10px] p-5 mt-4">
            <div className="flex justify-center mb-4">
              <img src={Calculator} alt="calculator" />
            </div>
            <CaptionSmall fontWeight="font-bold" textColor="text-sub-heading">
              Plan your portfolio
            </CaptionSmall>
            <CaptionExtraSmall extraClass="mt-2.5">
              Use our calculator to explore potential investment outcomes and plan your portfolio
              over time.
            </CaptionExtraSmall>
            <div className="mt-4">
              <RoundedButton
                label="Calculate Now"
                width="w-max"
                textSize="text-sm"
                padding="py-3 px-6"
                onClick={() => nav('/user/calculator')}
              />
            </div>
          </div>

          {/* Help center / FAQ */}
          <div className="border border-border-primary rounded-[10px] p-5 mt-4">
            <div className="flex justify-center mb-4">
              <img src={HelpFAQ} alt="faq" />
            </div>
            <CaptionSmall fontWeight="font-bold" textColor="text-sub-heading">
              Help center &amp; FAQ
            </CaptionSmall>
            <CaptionExtraSmall extraClass="mt-2.5">
              Learn more about Fundrise BD and get answers to the most commonly asked questions.
            </CaptionExtraSmall>
            <div className="mt-4">
              <RoundedButton
                label="Learn More"
                width="w-max"
                textSize="text-sm"
                padding="py-3 px-6"
                bg="bg-white"
                hoverBg="hover:bg-btext-1-base/20"
                textColor="text-btext-1-base"
                border="border border-btext-1-base"
                onClick={() => nav('/user/support')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer – simplified & generic so you can customize freely */}
      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          This dashboard is for informational and illustrative purposes only and does not constitute
          investment, legal, or tax advice. All figures shown are examples and may not reflect your
          actual investment performance. Investing involves risk, including the possible loss of
          principal. Please review all offering materials carefully and consult with your own
          advisors before making any investment decisions.
        </CaptionExtraSmall>
      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;
