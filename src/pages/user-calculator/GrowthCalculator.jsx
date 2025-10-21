// src/components/GrowthCalculator.jsx
import { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const fmtUSD0 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const fmtUSD2 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

/** Simple monthly compounding; one point per year */
function simulateYears({ startAge, endAge, monthly, lump, annualRate }) {
  const months = (endAge - startAge) * 12;
  const r = annualRate / 12;
  let balance = lump;
  let invested = lump;
  const out = [];
  for (let m = 1; m <= months; m++) {
    balance = balance * (1 + r) + monthly;
    invested += monthly;
    if (m % 12 === 0) out.push({ age: startAge + m / 12, balance, invested });
  }
  return out;
}

export default function GrowthCalculator({
  startAge = 47,
  endAge = 77,
  defaultMonthly = 4400,
  defaultLump = 0,
  annualReturn = 0.08,
}) {
  const [monthly, setMonthly] = useState(defaultMonthly);
  const [lump, setLump] = useState(defaultLump);
  const [rate, setRate] = useState(annualReturn);

  const data = useMemo(
    () => simulateYears({ startAge, endAge, monthly, lump, annualRate: rate }),
    [startAge, endAge, monthly, lump, rate]
  );

  const yMax = useMemo(() => {
    if (!data.length) return 1000;
    const max = Math.max(...data.map((d) => Math.max(d.balance, d.invested)));
    return Math.ceil((max * 1.05) / 1000) * 1000;
  }, [data]);

  const final = data[data.length - 1] || { balance: 0, invested: 0 };

  return (
    <div className="grid gap-6 md:grid-cols-[340px,1fr]">
      {/* left controls */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-border-primary bg-white p-4 shadow-sm">
          <p className="mb-2 text-sm font-medium text-slate-600">Monthly investment</p>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={20000}
              step={100}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full accent-bg-dusky-plum-base"
            />
            <span className="w-28 text-right font-medium text-sub-heading">
              {fmtUSD0.format(monthly)}
            </span>
          </div>
          <button className="mt-4 w-full rounded-xl bg-bg-dusky-plum-base px-4 py-2.5 text-white font-medium hover:opacity-90 transition">
            Enable Auto Invest
          </button>
        </div>

        <div className="rounded-2xl border border-border-primary bg-white p-4 shadow-sm">
          <p className="mb-2 text-sm font-medium text-slate-600">One-time investment</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              step={100}
              value={lump}
              onChange={(e) => setLump(clamp(Number(e.target.value || 0), 0, 100000000))}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sub-heading outline-none focus:ring-2 focus:ring-purple-300"
            />
            <span className="w-28 text-right font-medium text-sub-heading">
              {fmtUSD0.format(lump)}
            </span>
          </div>

          <button className="mt-4 w-full rounded-xl bg-bg-dusky-plum-base px-4 py-2.5 text-white font-medium hover:opacity-90 transition">
            Invest
          </button>

          <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
            <span>Assumed annual return</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="0"
                max="20"
                value={(rate * 100).toFixed(1)}
                onChange={(e) => setRate(clamp(Number(e.target.value) / 100, 0, 0.2))}
                className="w-16 rounded-lg border border-slate-300 px-2 py-1 text-right"
              />
              <span>%</span>
            </div>
          </div>
        </div>
      </div>

      {/* right card + chart */}
      <div className="rounded-2xl border border-border-primary bg-white p-4 md:p-6 shadow-sm">
        <div className="mb-3">
          <p className="text-sm text-slate-600">Potential future portfolio value of</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
            <h3 className="text-3xl font-bold text-slate-900">
              {fmtUSD0.format(final.balance)} at age {endAge}
            </h3>
          </div>
          <div className="mt-1 flex items-center gap-2 text-slate-600">
            <span className="inline-block h-3 w-3 rounded-full bg-slate-500" />
            <p className="text-sm">Investment: {fmtUSD0.format(final.invested)}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <ResponsiveContainer width="100%" height={360}>
            <ComposedChart data={data} margin={{ top: 12, right: 24, left: 8, bottom: 12 }}>
              <CartesianGrid stroke="#E5E7EB" />
              <XAxis
                dataKey="age"
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              {/* <YAxis
                domain={[0, yMax]}
                tickFormatter={(v) => fmtUSD0.format(v)}
                width={80}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              /> */}
              <Tooltip
                formatter={(value, name) => [
                  fmtUSD2.format(value),
                  name === 'balance' ? 'Portfolio' : 'Invested',
                ]}
                labelFormatter={(label) => `Age ${label}`}
              />
              {/* <Legend /> */}

              {/* Portfolio area */}
              <Area
                type="monotone"
                dataKey="balance"
                name="balance"
                stroke="#EAB308"
                strokeWidth={2.5}
                fill="#EABE6F"
                fillOpacity={0.45}
                isAnimationActive={false}
              />

              {/* TOTAL CONTRIBUTED — make it BRIGHT RED first so you SEE it */}
              <Line
                type="monotone"
                dataKey="invested"
                name="invested"
                stroke="#6B7280" // DEBUG: red
                strokeWidth={2}
                strokeDasharray="6 6"
                dot={{ r: 1 }}
                activeDot={{ r: 5 }}
                connectNulls
                isAnimationActive={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          There is no guarantee that the intended account growth will be achieved, or that the
          selected investment will assist in achieving the intended outcome. Any hypothetical growth
          of investment is presented for illustrative purposes only.
        </p>
      </div>
    </div>
  );
}
