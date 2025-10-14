import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';
import SubHeading from '../../components/text/SubHeading';

function transformChartData(labels, series) {
  return labels.map((label, idx) => {
    const row = { label }; // x-axis label
    series.forEach((s) => {
      row[s.name] = parseFloat(s.values[idx]); // convert to number
    });
    return row;
  });
}

export default function PerformanceChart({ content, id }) {
  if (!content?.data?.labels || !content?.data?.series || content.data.series.length === 0) {
    return <div>No chart data available.</div>;
  }

  const chartData = transformChartData(content.data.labels, content.data.series);

  return (
    <div className="w-full" id={id}>
      <SubHeading>{content.title}</SubHeading>
      <div className="w-full mt-3 mx-auto p-1 sm:p-4 border rounded shadow">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis tickFormatter={(val) => `${val}`} />
            <Tooltip formatter={(val) => `${val}`} />
            <Legend />

            {content.data.series.map((s, index) => (
              <Line
                key={s.name}
                type="monotone"
                dataKey={s.name}
                stroke={s.color || ['#F97316', '#D946EF', '#A855F7'][index % 3]}
                strokeWidth={3}
                dot={false}
                name={s.name}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-right text-xs text-gray-500 mt-2">
          Forge Data as of {content.updated_at || 'N/A'}
        </p>
      </div>
    </div>
  );
}
