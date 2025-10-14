// src/components/AIPrimaryFundingChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from 'recharts';
import SubHeading from '../../components/text/SubHeading';

const data = [
  { quarter: 'Q1 2023', value: 1 },
  { quarter: 'Q1 2023', value: 11 },
  { quarter: 'Q1 2023', value: 9 },
  { quarter: 'Q1 2024', value: 16 },
  { quarter: 'Q1 2024', value: 16 },
  { quarter: 'Q1 2024', value: 8 },
  { quarter: 'Q1 2024', value: 14 },
  { quarter: 'Q1 2025', value: 62 },
  { quarter: 'Q1 2025', value: 73 },
];

export default function AIPrimaryFundingChart({ id }) {
  return (
    <div id={id} className="mt-10 p-4 border rounded shadow bg-white dark:bg-backgroundDark">
      <SubHeading>Primary Funding in AI Companies as a % of Primary Funding</SubHeading>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis tickFormatter={(v) => `${v}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="value" fill="#68c3b8">
            <LabelList dataKey="value" position="top" formatter={(v) => `${v}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-right text-gray-500 mt-2">Forge Data as of 3/31/25</p>
    </div>
  );
}
