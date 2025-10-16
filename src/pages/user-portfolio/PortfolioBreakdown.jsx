import { useMemo, useState } from 'react';
import { ChevronDown, Percent, DollarSign } from 'lucide-react';
import SubHeading from '../../components/text/SubHeading';

/* ---- Data ---- */
const FUNDS = [
  {
    id: 'navana',
    name: 'NAVANA Real Estate',
    allocation: 50.0, // percent of portfolio
    netReturn: 0.0, // cumulative % return

    children: [
      { id: 'navana-belgravia', name: 'Navana Belgravia', allocation: 30.0, netReturn: 0.0 },
      {
        id: 'navana-windermere',
        name: 'Navana Fateha Windermere',
        allocation: 20.0,
        netReturn: 0.0,
      },
    ],
  },
  {
    id: 'shanta',
    name: 'SHANTA Holdings',
    allocation: 35.0,
    netReturn: 0.0,
    children: [
      { id: 'dhaka-tower', name: 'Dhaka Tower', allocation: 20.0, netReturn: 0.0 },
      { id: 'evermore', name: 'Evermore', allocation: 15.0, netReturn: 0.0 },
    ],
  },
  {
    id: 'south-breeze',
    name: 'South Breeze Housing Ltd.',
    allocation: 15.0,
    netReturn: 0.0,
    children: [{ id: 'south-supreme', name: 'South Supreme', allocation: 15.0, netReturn: 0.0 }],
  },
];

/* ---- Helpers ---- */
const fmtPercent = (v) => `${Number(v).toFixed(1)}%`;
const fmtCurrency = (v, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 1,
    notation: 'compact',
  }).format(v);

export default function PortfolioBreakdown({
  data = FUNDS,
  currency = 'USD',
  portfolioValue = 100000, // total portfolio value used for $ conversion
}) {
  // expanded sections as a Set
  const [expandedSections, setExpandedSections] = useState(() => new Set());
  // view mode: '%' or '$'
  const [mode, setMode] = useState('%');

  const toggleSection = (id) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Weighted average net return (%) across groups, weighted by allocation share
  const weightedAverageNetReturnPct = useMemo(() => {
    const totalAlloc = data.reduce((s, g) => s + (g.allocation || 0), 0) || 1;
    const sum = data.reduce((acc, g) => acc + (g.netReturn || 0) * (g.allocation || 0), 0);
    return sum / totalAlloc;
  }, [data]);

  // Display helpers based on mode
  const displayAllocation = (pct) =>
    mode === '%' ? fmtPercent(pct) : fmtCurrency((pct / 100) * portfolioValue, currency);

  const displayNetReturn = (allocPct, netReturnPct) => {
    if (mode === '%') return fmtPercent(netReturnPct);
    // In $: amount earned = (allocation dollars) * (netReturn%)
    const allocDollars = (allocPct / 100) * portfolioValue;
    const earned = (netReturnPct / 100) * allocDollars;
    return fmtCurrency(earned, currency);
  };

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
              {data.map((group) => {
                const isOpen = expandedSections.has(group.id);
                return (
                  <Fragment key={group.id}>
                    {/* Group row */}
                    <tr className="bg-bg-primary-2">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <button
                            onClick={() => toggleSection(group.id)}
                            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                            aria-expanded={isOpen}
                            aria-controls={`${group.id}-children`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? '' : '-rotate-90'
                              }`}
                              strokeWidth={2}
                            />
                          </button>
                          <span className="text-[13px] font-medium text-gray-900">
                            {group.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-right border-r-2 border-r-border-secondary">
                        <div className="flex items-center justify-end gap-4">
                          <RadialProgress value={group.allocation} size={30} strokeWidth={6} />
                          <span className="text-[13px] text-gray-900">
                            {displayAllocation(group.allocation)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-right text-[13px] text-gray-900">
                        {displayNetReturn(group.allocation, group.netReturn)}
                      </td>
                    </tr>

                    {/* Children */}
                    {isOpen &&
                      (group.children || []).map((child) => (
                        <tr
                          key={child.id}
                          id={`${group.id}-children`}
                          className="border-t border-gray-100 bg-gray-50/30"
                        >
                          <td className="px-6 py-2.5 pl-14">
                            <span className="text-[13px] text-gray-700">{child.name}</span>
                          </td>
                          <td className="px-6 py-2.5 text-right border-r-2 border-r-border-secondary text-[13px] text-gray-700">
                            {displayAllocation(child.allocation)}
                          </td>
                          <td className="px-6 py-2.5 text-right text-[13px] text-gray-700">
                            {displayNetReturn(child.allocation, child.netReturn)}
                          </td>
                        </tr>
                      ))}
                  </Fragment>
                );
              })}

              {/* Weighted Average */}
              <tr className="border-t-2 border-border-secondary">
                <td className="px-6 py-3.5 text-[13px] font-medium text-gray-900">
                  Weighted Average
                </td>
                <td className="px-6 py-3.5 text-right border-r-2 border-r-border-secondary text-[13px] font-medium text-gray-900">
                  {mode === '%' ? '100.0%' : fmtCurrency(portfolioValue, currency)}
                </td>
                <td className="px-6 py-3.5 text-right text-[13px] font-medium text-gray-900">
                  {mode === '%'
                    ? fmtPercent(weightedAverageNetReturnPct)
                    : fmtCurrency((weightedAverageNetReturnPct / 100) * portfolioValue, currency)}
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
