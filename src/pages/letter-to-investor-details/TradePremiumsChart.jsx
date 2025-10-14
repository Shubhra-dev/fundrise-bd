import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
const data = [
  { date: "Jan 19", p10: -60, p25: -40, p50: -10, p75: 10, p90: 40 },
  { date: "Jul 19", p10: -50, p25: -30, p50: 0, p75: 20, p90: 60 },
  { date: "Jan 20", p10: -55, p25: -35, p50: 5, p75: 25, p90: 70 },
  { date: "Jul 20", p10: -52, p25: -31, p50: -5, p75: 24, p90: 55 },
  { date: "Jan 21", p10: -40, p25: -25, p50: 10, p75: 30, p90: 90 },
  { date: "Jul 21", p10: -45, p25: -28, p50: 8, p75: 26, p90: 85 },
  { date: "Jan 22", p10: -60, p25: -35, p50: -10, p75: 20, p90: 70 },
  { date: "Jan 23", p10: -52, p25: -31, p50: -5, p75: 24, p90: 55 },
  { date: "Jan 24", p10: -55, p25: -34, p50: -8, p75: 22, p90: 60 },
  { date: "Jan 25", p10: -52, p25: -31, p50: -5, p75: 24, p90: 55 },
];
export default function TradePremiumsChart() {
  return (
    <div className="mt-10 p-4 bg-white rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">
        Distribution of Trade Premiums/Discounts to Last Primary Funding Round
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="date" />
          <YAxis domain={[-100, 200]} tickFormatter={(v) => `${v}%`} />
          <Tooltip formatter={(v) => `${v}%`} />
          {/* Shaded area: 10th to 90th */}
          <Area
            type="monotone"
            dataKey="p90"
            isAnimationActive={false}
            stroke="white"
            fill="#a78bfa"
            fillOpacity={0.2}
            dot={false}
            activeDot={false}
            baseLine={(x) => x.p10}
          />
          <Area
            type="monotone"
            dataKey="p10"
            stroke="white"
            isAnimationActive={false}
            fill="#a78bfa"
            fillOpacity={0.2}
            dot={false}
            activeDot={false}
            baseLine={(x) => x.p10}
          />
          {/* Shaded area: 25th to 75th */}
          <Area
            type="monotone"
            dataKey="p75"
            stroke="white"
            fill="#a78bfa"
            fillOpacity={0.35}
            isAnimationActive={false}
            dot={false}
            activeDot={false}
            baseLine={(x) => x.p25}
          />
          <Area
            type="monotone"
            dataKey="p25"
            stroke="white"
            fill="#a78bfa"
            fillOpacity={0.35}
            isAnimationActive={false}
            dot={false}
            activeDot={false}
            baseLine={(x) => x.p25}
          />
          {/* Percentile lines */}
          <Line
            type="monotone"
            dataKey="p90"
            stroke="#a78bfa"
            strokeWidth={2}
            dot={false}
            name="90th Percentile"
          />
          <Line
            type="monotone"
            dataKey="p75"
            stroke="#a78bfa"
            strokeWidth={1.5}
            dot={false}
            name="75th Percentile"
          />
          <Line
            type="monotone"
            dataKey="p50"
            stroke="#000000"
            strokeWidth={2}
            dot={false}
            name="Median "
          />
          <Line
            type="monotone"
            dataKey="p25"
            stroke="#a78bfa"
            strokeWidth={1.5}
            dot={false}
            name="25th Percentile "
          />
          <Line
            type="monotone"
            dataKey="p10"
            stroke="#a78bfa"
            strokeWidth={2}
            dot={false}
            name="10th Percentile "
          />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="text-right text-sm text-gray-400 mt-2">
        Forge Data as of 3/31/25
      </p>
    </div>
  );
}
