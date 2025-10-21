// src/pages/user-transactions/UserTransaction.jsx
import { useState } from 'react';
import BodySmall from '@/components/text/BodySmall';
import DashboardLayout from '../user-dashboard/DashboardLayout';
import SmallHeading from '@components/text/SubHeading';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import CaptionSmall from '@/components/text/CaptionSmall';
import { ChevronRight, X } from 'lucide-react';

const rows = [
  { name: 'Flagship Real Estate Fund', quantity: null, price: null, amount: 2700 },
  { name: 'Income Real Estate Fund', quantity: null, price: null, amount: 300 },
];

const dash = '— —'; // stylistic double em-dash

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

export default function UserTransaction() {
  const [openDetails, setOpenDetails] = useState(false);

  const DetailsContent = (
    <>
      <div className="flex w-full items-center justify-between gap-7 pb-[15px] border-b border-dashed border-border-primary">
        <div className="w-[55%]">
          <BodySmall textColor="text-sub-heading">
            <span className="font-bold">Investment</span> - Long term Growth{' '}
          </BodySmall>
          <CaptionExtraSmall extraClass="mt-1">July 11, 2025</CaptionExtraSmall>
        </div>
        <BodySmall textColor="text-sub-heading" fontWeight="font-bold">
          $3,000.00
        </BodySmall>
      </div>

      <div className="py-[15px] border-b border-dashed border-border-primary flex items-center justify-between gap-3">
        <div className="flex items-center justify-normal">
          <TextItem heading="Order#" text="G123456" />
          <div className="bg-border-primary h-7 w-[1px]" />
          <TextItem heading="Order Placed" text="July 11, 2025" />
          <div className="bg-border-primary h-7 w-[1px]" />
          <TextItem heading="Funding source" text="City Bank 1473 (Checking)" />
        </div>
        <button
          className="hidden tab:block py-3 px-6 border border-border-primary hover:bg-bg-dusky-plum-light text-sub-title text-sm font-display rounded-md font-semibold"
          type="button"
        >
          Cancel
        </button>
      </div>

      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-sub-heading text-xs sm:text-sm font-semibold">
              <th className="text-left px-4 sm:px-6 py-3 border-b border-border-primary">Name</th>
              <th className="text-center px-4 sm:px-6 py-3 border-b border-border-primary">
                Quantity
              </th>
              <th className="text-center px-4 sm:px-6 py-3 border-b border-border-primary">
                Price
              </th>
              <th className="text-right px-4 sm:px-6 py-3 border-b border-border-primary">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((r, i) => (
              <tr key={i} className="text-sub-heading text-xs">
                <td className="px-4 sm:px-6 py-3">{r.name}</td>
                <td className="px-4 sm:px-6 py-3 text-center tabular-nums">
                  {r.quantity == null ? dash : r.quantity}
                </td>
                <td className="px-4 sm:px-6 py-3 text-center tabular-nums">
                  {r.price == null ? dash : formatMoney(r.price)}
                </td>
                <td className="px-4 sm:px-6 py-3 text-right font-semibold tabular-nums">
                  {formatMoney(r.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <DashboardLayout activeTab={4}>
      <div className="flex items-start gap-5 min-h-[80vh]">
        {/* LEFT: List */}
        <div className="border border-border-primary rounded-xl p-5 w-full tab:w-[45%]">
          <SmallHeading>Pending</SmallHeading>

          <div className="mt-5 w-full">
            <button
              type="button"
              onClick={() => setOpenDetails(true)}
              className="flex w-full items-center justify-normal gap-7 hover:bg-bg-primary-2 p-1 rounded-md"
            >
              <div className="w-[55%] text-left">
                <BodySmall textColor="text-sub-heading">
                  <span className="font-bold">Investment</span> - Long term Growth{' '}
                </BodySmall>
                <CaptionExtraSmall extraClass="mt-1">July 11, 2025</CaptionExtraSmall>
              </div>
              <div className="flex w-[45%] items-center justify-between gap-7">
                <BodySmall textColor="text-sub-heading" fontWeight="font-bold">
                  $3,000.00
                </BodySmall>
                <div className="p-1 bg-bg-blush-mist-base rounded-md">
                  <ChevronRight />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT (desktop/tab+): Static details pane */}
        <div className="hidden tab:block border border-border-primary rounded-xl p-5 w-[55%]">
          {DetailsContent}
        </div>
      </div>

      {/* MODAL (small & tab only): overlayed details */}
      <div
        className={`fixed inset-0 z-50 ${openDetails ? 'block' : 'hidden'} tab:hidden`}
        aria-hidden={!openDetails}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpenDetails(false)} />
        {/* Modal card */}
        <div
          role="dialog"
          aria-modal="true"
          className="relative mx-auto mt-10 w-[92%] max-w-xl rounded-2xl border border-border-primary bg-white p-5 shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <SmallHeading>Details</SmallHeading>
            <button
              type="button"
              onClick={() => setOpenDetails(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-bg-primary-2"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {DetailsContent}
        </div>
      </div>

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
