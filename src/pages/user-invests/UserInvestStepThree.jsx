import { useEffect, useMemo, useState } from 'react';
import BodySmall from '@/components/text/BodySmall';
import RoundedButton from '@/components/buttons/RoundedButton';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import { HiTrash } from 'react-icons/hi';
import BodyBase from '@/components/text/BodyBase';
import { ArrowRightLeft } from 'lucide-react';
import { postInvestmentRequest } from '@/services/investment';
import { useNavigate } from 'react-router-dom';

function fmtCurrency(n) {
  if (n == null || Number.isNaN(Number(n))) return '$0';
  return '$' + Number(n).toLocaleString();
}

export default function UserInvestStepThree({
  amount = 500,
  selectedProjects = [],
  onPrev,
  onSuccess,
}) {
  const planAmount = Number(amount) || 0;

  const [rows, setRows] = useState(() =>
    selectedProjects.map((p) => ({
      ...p,
      amount:
        p.investmentAmount ?? Math.round((planAmount || 0) / Math.max(1, selectedProjects.length)),
    }))
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setRows(
      selectedProjects.map((p) => ({
        ...p,
        amount:
          p.investmentAmount ??
          Math.round((planAmount || 0) / Math.max(1, selectedProjects.length)),
      }))
    );
  }, [selectedProjects, planAmount]);

  const totalInvested = useMemo(() => rows.reduce((s, r) => s + Number(r.amount || 0), 0), [rows]);

  const updateRowAmount = (name, value) => {
    const num = Number(String(value).replace(/[^0-9.-]+/g, '')) || 0;
    setRows((prev) =>
      prev.map((r) => (r.name === name ? { ...r, amount: Math.max(0, Math.round(num)) } : r))
    );
  };

  const removeRow = (name) => setRows((prev) => prev.filter((r) => r.name !== name));

  // ✅ Async submit handler with try/catch, loading & error
  const handleSubmit = async () => {
    const payload = {
      projects: rows.map((r) => ({
        project_id: r.id,
        invest_amount: Number(r.amount || 0),
      })),
    };

    try {
      setIsSubmitting(true);
      setSubmitError(null);
      const response = await postInvestmentRequest(payload);
      if (response?.success) {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
      setSubmitError(err?.message || 'Something went wrong while submitting your investment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <BodyBase>
        Invest in your plan <span className="text-btext-1-base text-2xl font-bold">${amount}</span>.
      </BodyBase>

      {totalInvested > planAmount && planAmount > 0 && (
        <BodyBase>
          <span className="font-bold text-btext-1-dark">Congratulations!</span> Your investment has
          increased by{' '}
          <span className="font-bold text-btext-1-dark">
            {((totalInvested / planAmount) * 100 - 100).toFixed(2)}%
          </span>
          , reaching{' '}
          <span className="font-bold text-2xl text-btext-1-dark">{fmtCurrency(totalInvested)}</span>
        </BodyBase>
      )}

      <div className="mt-6 space-y-4">
        {rows.map((p) => {
          const pct =
            planAmount > 0 ? Math.round((Number(p.amount || 0) / planAmount) * 1000) / 10 : 0;

          return (
            <div
              key={p.id}
              className="rounded-md w-full tab:w-[90%] border border-border-primary p-5 flex flex-col sm:flex-row items-center justify-normal gap-5 sm:gap-10"
            >
              <div className="flex items-center gap-3 w-full sm:min-w-[35%]">
                <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={p.thumbnail_image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <BodyBase fontWeight="font-semibold">{p.name}</BodyBase>
                  <BodySmall textColor="text-btext-1-base">{p.company_name}</BodySmall>
                </div>
              </div>

              <div className="hidden sm:block w-0 h-8 outline outline-1 outline-offset-[-0.50px] outline-border-primary" />

              <div className="flex w-full sm:w-auto items-center justify-between sm:justify-normal gap-6">
                <div className="text-xs text-sub-title text-center">
                  <BodyBase textColor="text-btext-3-dark" fontWeight="font-medium">
                    {pct.toFixed(1)}%
                  </BodyBase>
                </div>
                <ArrowRightLeft className="text-icon-brand-2-dark w-3.5 h-3.5" />
                <div className="text-sm font-semibold text-sub-heading text-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={p.amount}
                      onChange={(e) => updateRowAmount(p.name, e.target.value)}
                      className="w-32 px-[14px] py-[7px] rounded-md border border-gray-200 text-xl text-btext-3-dark"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeRow(p.name)}
                  className="p-2.5 sm:hidden bg-bg-blush-mist-light rounded-lg outline outline-1 outline-offset-[-1px] outline-border-brand-4"
                >
                  <HiTrash className="w-8 h-8 text-bg-blush-mist-dark" />
                </button>
              </div>

              <div className="hidden sm:block w-0 h-8 outline outline-1 outline-offset-[-0.50px] outline-border-primary" />

              <button
                onClick={() => removeRow(p.name)}
                className="p-2.5 hidden sm:block bg-bg-blush-mist-light rounded-lg outline outline-1 outline-offset-[-1px] outline-border-brand-4"
              >
                <HiTrash className="w-8 h-8 text-bg-blush-mist-dark" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Submit error */}
      {submitError && (
        <div className="mt-4 rounded-md bg-red-50 border border-red-200 px-4 py-3">
          <BodySmall textColor="text-red-700">{submitError}</BodySmall>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <RoundedButton
          type="button"
          label="Prev"
          bg="bg-bg-cool-irish-dark"
          onClick={onPrev}
          disabled={isSubmitting}
        />
        <RoundedButton
          type="button"
          label={isSubmitting ? 'Investing…' : 'Invest'}
          bg="bg-bg-dusky-plum-base"
          onClick={handleSubmit}
          disabled={isSubmitting || rows.length === 0}
        />
      </div>

      <div className="mt-8 py-5 border-t border-t-border-primary">
        <CaptionExtraSmall>
          Fundrise, LLC (“Fundrise“) operates a website at fundrise.com and certain mobile apps (the
          “Platform“). By using the Platform, you accept our Terms of Service and Privacy Policy.
        </CaptionExtraSmall>
      </div>
    </div>
  );
}
