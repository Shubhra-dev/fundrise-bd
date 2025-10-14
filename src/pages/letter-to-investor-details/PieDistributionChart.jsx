import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SubHeading from '../../components/text/SubHeading';

export default function PieDistributionChart({ data, title = 'Pie Chart Distribution', id }) {
  const series = data.series[0]; // Only the first series is relevant for pie chart

  // Create color palette fallback
  const fallbackColors = ['#825ABA', '#3895A3', '#FFA500', '#4CAF50', '#FF69B4', '#1E90FF'];

  // Transform data into format for PieChart
  const transformedData = data.labels.map((label, index) => ({
    name: label,
    value: parseFloat(series.values[index]),
    color: series.color || fallbackColors[index % fallbackColors.length],
  }));

  return (
    <div id={id} className="mt-10 p-1 sm:p-4 w-full">
      <SubHeading>{title}</SubHeading>
      <div className="mt-10 p-1 sm:p-4 bg-white rounded-2xl shadow-md w-full">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={transformedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={40}
              fill="#8884d8"
              label
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-right text-sm text-gray-400 mt-2">Forge Data as of 3/31/25</p>
      </div>
    </div>
  );
}
