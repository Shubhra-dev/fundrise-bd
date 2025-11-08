import { useEffect, useState } from 'react';
import BodySmall from '@/components/text/BodySmall';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import CaptionSmall from '@/components/text/CaptionSmall';
import { getTransactionsDetails } from '@/services/transaction';

const dash = '— —';

function formatMoney(value) {
  if (value == null) return dash;
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(Number(value));
  } catch {
    return value;
  }
}

function TextItem({ heading, text, border = '' }) {
  return (
    <div className={`${border} px-[15px]`}>
      <CaptionSmall fontWeight="font-bold" textColor="text-sub-heading">
        {heading}
      </CaptionSmall>
      <CaptionExtraSmall>{text}</CaptionExtraSmall>
    </div>
  );
}

export default function DetailsContent({ transactionId, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchTransactionDetails() {
      try {
        setIsLoading(true);
        setError(null); // TODO: Replace with your actual API call
        const response = await getTransactionsDetails(transactionId);
        setData(response.result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (transactionId) {
      fetchTransactionDetails();
    }
  }, [transactionId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px]">
        <div className="animate-pulse flex flex-col gap-4 w-full">
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
          <div className="h-20 bg-slate-200 rounded w-full mt-4"></div>
          <div className="h-40 bg-slate-200 rounded w-full mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
        <div className="text-red-500 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    );
  }

  if (!data || !data.investment) {
    return null;
  }

  const { investment } = data;
  const transaction = investment.transactions[0]; // Get the first transaction

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <div className="flex w-full items-center justify-between gap-7 pb-[15px] border-b border-dashed border-border-primary">
        <div className="w-[55%]">
          <BodySmall textColor="text-sub-heading">
            <span className="font-bold">Investment</span> - {investment.project_name}
          </BodySmall>
          <CaptionExtraSmall extraClass="mt-1">
            {formatDate(investment.invest_date)}
          </CaptionExtraSmall>
        </div>
        <BodySmall textColor="text-sub-heading" fontWeight="font-bold">
          {formatMoney(investment.invest_amount)}
        </BodySmall>
      </div>

      <div className="py-[15px] border-b border-dashed border-border-primary flex items-center justify-between gap-3">
        <div className="flex items-center justify-normal">
          <TextItem heading="Order#" text={investment.order} />
          <div className="bg-border-primary h-7 w-[1px]" />
          <TextItem heading="Order Placed" text={formatDate(investment.invest_date)} />
          <div className="bg-border-primary h-7 w-[1px]" />
          <TextItem heading="Payment Method" text={transaction.payment_method} />
        </div>
        <button
          className="hidden tab:block py-3 px-6 border border-border-primary hover:bg-bg-dusky-plum-light text-sub-title text-sm font-display rounded-md font-semibold"
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-sub-heading text-xs sm:text-sm font-semibold">
              <th className="text-left px-4 sm:px-6 py-3 border-b border-border-primary">
                Project
              </th>
              <th className="text-center px-4 sm:px-6 py-3 border-b border-border-primary">
                Company
              </th>
              <th className="text-center px-4 sm:px-6 py-3 border-b border-border-primary">
                Status
              </th>
              <th className="text-right px-4 sm:px-6 py-3 border-b border-border-primary">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr className="text-sub-heading text-xs">
              <td className="px-4 sm:px-6 py-3">{investment.project_name}</td>
              <td className="px-4 sm:px-6 py-3 text-center">{investment.company_name}</td>
              <td className="px-4 sm:px-6 py-3 text-center">{investment.status}</td>
              <td className="px-4 sm:px-6 py-3 text-right font-semibold tabular-nums">
                {formatMoney(investment.invest_amount)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
