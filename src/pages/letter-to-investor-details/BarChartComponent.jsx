import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';
import SubHeading from '../../components/text/SubHeading';

function transformBarData(labels, series) {
  return labels.map((label, idx) => {
    const row = { label };
    series.forEach((s) => {
      row[s.name] = parseFloat(s.values[idx]);
    });
    return row;
  });
}

const BarChartComponent = ({ data, title, id }) => {
  if (!data || !data.labels || !data.series || data.series.length === 0) {
    return <div className="text-center">No bar chart data available.</div>;
  }

  const chartData = transformBarData(data.labels, data.series);
  const colorPalette = ['#F97316', '#3B82F6', '#10B981', '#D946EF', '#A855F7'];

  return (
    <div className="w-full" id={id}>
      <SubHeading>{title}</SubHeading>
      <div className="w-full mx-auto p-1 sm:p-4 mt-4 border rounded shadow">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis tickFormatter={(val) => `${val}`} />
            <Tooltip formatter={(val) => `${val}`} />
            <Legend />
            {data.series.map((s, index) => (
              <Bar
                key={s.name}
                dataKey={s.name}
                fill={s.color || colorPalette[index % colorPalette.length]}
                name={s.name}
                barSize={40}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
