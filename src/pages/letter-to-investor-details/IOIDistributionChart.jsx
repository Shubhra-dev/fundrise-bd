import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import SubHeading from '../../components/text/SubHeading';

export default function IOIDistributionChart({ data, title = 'Distribution Chart', id }) {
  // Convert input format to Recharts format
  const transformedData = data.labels.map((label, index) => {
    const entry = { label };
    data.series.forEach((series) => {
      entry[series.name] = parseFloat(series.values[index]);
    });
    return entry;
  });

  return (
    <div id={id} className="mt-10 w-full">
      <SubHeading
        fontWeight={`font-semibold`}
        textColor={`text-textHeading`}
        textColorDark={`dark:text-textHeadingDark`}
        extraClass={`uppercase`}
      >
        {title}
      </SubHeading>
      <div id={id} className="mt-3 p-1 sm:p-4 bg-white rounded-2xl shadow-md w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
            <Tooltip formatter={(val) => `${val.toFixed(1)}%`} />
            <Legend />
            {data.series.map((series, index) => (
              <Bar
                key={series.name}
                dataKey={series.name}
                stackId="a"
                fill={series.color || (index % 2 === 0 ? '#8884d8' : '#82ca9d')}
                name={series.name}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
        <p className="text-right text-sm text-gray-400 mt-2">Forge Data as of 3/31/25</p>
      </div>
    </div>
  );
}
