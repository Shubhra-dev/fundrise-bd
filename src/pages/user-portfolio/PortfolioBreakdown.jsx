import { useEffect, useState } from 'react';
import { ChevronDown, Percent, DollarSign } from 'lucide-react';
import SubHeading from '../../components/text/SubHeading';
import { getPortfolioBreakdown } from '../../services/portfolio';

/* ---- Helpers ---- */
const fmtPercent = (v) => `${Number(v).toFixed(1)}%`;
const fmtCurrency = (v, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 1,
    notation: 'compact',
  }).format(v);

export default function PortfolioBreakdown() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [breakdownData, setBreakdownData] = useState(null);
  const [expandedSections, setExpandedSections] = useState(() => new Set());
  const [mode, setMode] = useState('%');
  const currency = 'USD';

  useEffect(() => {
    const fetchBreakdown = async () => {
      try {
        setLoading(true);
        const response = await getPortfolioBreakdown();
        setBreakdownData(response.result);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch portfolio breakdown');
      } finally {
        setLoading(false);
      }
    };

    fetchBreakdown();
  }, []);

  const toggleSection = (id) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const { total_invested, breakdown, weighted_average } = breakdownData || {};

  // Display helpers based on mode
  const displayAllocation = (pct) =>
    mode === '%' ? fmtPercent(pct) : fmtCurrency((pct / 100) * (total_invested || 0), currency);

  const displayNetReturn = (allocPct, netReturnPct) => {
    if (mode === '%') return fmtPercent(netReturnPct);
    // In $: amount earned = (allocation dollars) * (netReturn%)
    const allocDollars = (allocPct / 100) * (total_invested || 0);
    const earned = (netReturnPct / 100) * allocDollars;
    return fmtCurrency(earned, currency);
  };

  if (loading) {
    return (
      <div className="w-full mt-5 flex justify-center">
        <div className="animate-pulse">Loading portfolio breakdown...</div>
      </div>
    );
  }

  if (error) {
    return <div className="w-full mt-5 text-red-500 text-center">{error}</div>;
  }

  if (!breakdownData) {
    return <div className="w-full mt-5 text-center">No portfolio data available.</div>;
  }

  return (
    <div className="w-full mt-5">
      <div className="w-full bg-white rounded-xl shadow-sm border border-border-primary">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <SubHeading>Portfolio breakdown</SubHeading>
          <div className="flex items-center bg-bg-dusky-plum-light/50 rounded-md p-1">
            <button
              onClick={() => setMode('%')}
              className={`text-sub-title p-2 rounded-l-md hover:bg-white ${mode === '%' ? 'font-bold bg-white' : ''}`}
              aria-pressed={mode === '%'}
              title="Show as percentage"
            >
              <Percent className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              onClick={() => setMode('$')}
              className={`text-sub-title p-2 rounded-r-md hover:bg-white ${mode === '$' ? 'font-bold bg-white' : ''}`}
              aria-pressed={mode === '$'}
              title="Show as currency"
            >
              <DollarSign className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-5">
          <table className="w-[180%] sm:w-full">
            <thead>
              <tr className="bg-bg-primary-2">
                <th className="text-left w-1/2 px-5 py-[15px] text-base font-bold text-sub-heading uppercase tracking-wide">
                  Real Estate Fund
                </th>
                <th className="text-right border-r-2 border-r-border-secondary px-5 py-[15px] text-base font-bold text-sub-heading uppercase tracking-wide w-1/4">
                  Allocation
                </th>
                <th className="text-left px-5 py-[15px] text-base font-bold text-sub-heading uppercase tracking-wide w-1/4">
                  <div>Net return</div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-5 py-3.5"></td>
                <td className="px-5 py-3.5 border-r-2 border-r-border-secondary"></td>
                <td className="px-5 py-3.5 text-center text-base font-normal">Cumulative</td>
              </tr>
              {breakdown?.map((company) => {
                const id =
                  company.company_name?.toLowerCase().replace(/\s+/g, '-') || company.company_name;
                const isOpen = expandedSections.has(id);
                return (
                  <Fragment key={id}>
                    {/* Group row */}
                    <tr className="bg-bg-primary-2">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <button
                            onClick={() => toggleSection(id)}
                            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                            aria-expanded={isOpen}
                            aria-controls={`${id}-children`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? '' : '-rotate-90'
                              }`}
                              strokeWidth={2}
                            />
                          </button>
                          <span className="text-[13px] font-medium text-gray-900">
                            {company.company_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-right border-r-2 border-r-border-secondary">
                        <div className="flex items-center justify-end gap-4">
                          <RadialProgress
                            value={company.allocation_percentage}
                            size={30}
                            strokeWidth={6}
                          />
                          <span className="text-[13px] text-gray-900">
                            {displayAllocation(company.allocation_percentage)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-right text-[13px] text-gray-900">
                        {displayNetReturn(
                          company.allocation_percentage,
                          company.net_return_percentage
                        )}
                      </td>
                    </tr>

                    {/* Children */}
                    {isOpen &&
                      (company.projects || []).map((project) => {
                        const childId =
                          project.project_name?.toLowerCase().replace(/\s+/g, '-') ||
                          project.project_name;
                        return (
                          <tr
                            key={childId}
                            id={`${id}-children`}
                            className="border-t border-gray-100 bg-gray-50/30"
                          >
                            <td className="px-6 py-2.5 pl-14">
                              <span className="text-[13px] text-gray-700">
                                {project.project_name}
                              </span>
                            </td>
                            <td className="px-6 py-2.5 text-right border-r-2 border-r-border-secondary text-[13px] text-gray-700">
                              {displayAllocation(project.allocation_percentage)}
                            </td>
                            <td className="px-6 py-2.5 text-right text-[13px] text-gray-700">
                              {displayNetReturn(
                                project.allocation_percentage,
                                project.net_return_percentage
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </Fragment>
                );
              })}

              {/* Weighted Average */}
              <tr className="border-t-2 border-border-secondary">
                <td className="px-6 py-3.5 text-[13px] font-medium text-gray-900">
                  Weighted Average
                </td>
                <td className="px-6 py-3.5 text-right border-r-2 border-r-border-secondary text-[13px] font-medium text-gray-900">
                  {mode === '%'
                    ? fmtPercent(weighted_average.allocation_percentage)
                    : fmtCurrency(weighted_average.allocation_amount, currency)}
                </td>
                <td className="px-6 py-3.5 text-right text-[13px] font-medium text-gray-900">
                  {mode === '%'
                    ? fmtPercent(weighted_average.net_return_percentage)
                    : fmtCurrency(weighted_average.net_return_amount, currency)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Needed because we used <Fragment> inline without importing React */
import { Fragment } from 'react';
import RadialProgress from '../../ui/RadialProgress';
