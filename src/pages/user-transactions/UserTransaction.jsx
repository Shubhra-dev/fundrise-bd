// src/pages/user-transactions/UserTransaction.jsx
import { useState, useEffect } from 'react';
import BodySmall from '@/components/text/BodySmall';
import DashboardLayout from '../user-dashboard/DashboardLayout';
import SmallHeading from '@components/text/SubHeading';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import { ChevronRight } from 'lucide-react';
import { getTransactions } from '@/services/transaction';
import TransactionDetails from '@/pages/user-transactions/TransactionDetails';

export default function UserTransaction() {
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getTransactions();
        setTransactions(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout activeTab={4}>
        <div className="flex items-center justify-center h-[80vh]">
          <div className="animate-pulse flex flex-col gap-4 w-full max-w-2xl">
            <div className="h-8 bg-slate-200 rounded w-1/4"></div>
            <div className="h-20 bg-slate-200 rounded w-full"></div>
            <div className="h-20 bg-slate-200 rounded w-full"></div>
            <div className="h-20 bg-slate-200 rounded w-full"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout activeTab={4}>
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <div className="text-red-500 mb-2">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <BodySmall textColor="text-red-500" fontWeight="font-bold">
            {error}
          </BodySmall>
          <CaptionExtraSmall extraClass="mt-2">
            Please try again later or contact support if the problem persists.
          </CaptionExtraSmall>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activeTab={4}>
      <div className="flex items-start gap-5 min-h-[80vh]">
        {/* LEFT: List */}
        <div className="w-full tab:w-[45%] flex flex-col gap-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.investment_id}
              className="border border-border-primary rounded-xl p-5 w-full hover:bg-bg-primary-2 cursor-pointer transition-colors"
            >
              <SmallHeading>{transaction.status}</SmallHeading>

              <div className="mt-5 w-full">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setSelectedTransactionId(transaction.investment_id);
                    setOpenDetails(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedTransactionId(transaction.investment_id);
                      setOpenDetails(true);
                    }
                  }}
                  className="flex w-full items-center justify-normal gap-7"
                >
                  <div className="w-[55%] text-left">
                    <BodySmall textColor="text-sub-heading truncate">
                      <span className="font-bold">{transaction.project_name}</span> -
                      {transaction.company_name}
                    </BodySmall>
                    <CaptionExtraSmall extraClass="mt-1">
                      {transaction.invest_date}
                    </CaptionExtraSmall>
                  </div>
                  <div className="flex w-[45%] items-center justify-between gap-7">
                    <BodySmall textColor="text-sub-heading" fontWeight="font-bold">
                      ${transaction.invest_amount}
                    </BodySmall>
                    <div className="p-1 bg-bg-blush-mist-base rounded-md">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Transaction Details Component - handles both desktop and mobile views */}
        <TransactionDetails
          isOpen={openDetails}
          onClose={() => {
            setOpenDetails(false);
            setSelectedTransactionId(null);
          }}
          transactionId={selectedTransactionId}
          isModal={false}
        />
      </div>

      {/* Mobile Modal Version */}
      <TransactionDetails
        isOpen={openDetails}
        onClose={() => {
          setOpenDetails(false);
          setSelectedTransactionId(null);
        }}
        transactionId={selectedTransactionId}
        isModal={true}
      />

      <div className="mt-10 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
          All images and return and projection figures shown are for illustrative purposes only, may
          assume additional investments over time, and are not actual Fundrise customer or model
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
          investment.{' '}
          <a href="" className="text-btext-1-dark underline">
            Full Disclosure
          </a>{' '}
          <br />
          <br />
          The publicly filed offering circulars of the issuers sponsored by Rise Companies Corp.,
          not all of which may be currently qualified by the Securities and Exchange Commission, may
          be found at fundrise.com/oc. For investors and potential investors who are residents of
          the State of Washington, please send all correspondence, including any questions or
          comments, to washingtonstate@fundrise.com. <br />
          <br />
          Fundrise takes any potential security issues seriously, and encourages the responsible and
          timely reporting of unknown security issues. Please send any discovered security concerns
          to © 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks of
          Rise Companies Corp. Proudly designed and coded in Washington, D.C. <br />
          <br />© 2025 Fundrise, LLC. All Rights Reserved. eREIT, eFund and eDirect are trademarks
          of Rise Companies Corp. Proudly designed and coded in Washington, D.C.
        </CaptionExtraSmall>
      </div>
    </DashboardLayout>
  );
}
