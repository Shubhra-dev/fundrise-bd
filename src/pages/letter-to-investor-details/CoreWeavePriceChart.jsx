import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Nov 24", forgePrice: 39 },
  { date: "Dec 24", forgePrice: 39 },
  { date: "Jan 10", forgePrice: 48 },
  { date: "Jan 20", forgePrice: 58 },
  { date: "Mar 1", forgePrice: 60 },
  { date: "Mar 27", forgePrice: 60 },
  { date: "Mar 28", forgePrice: 50, ipo: true },
  { date: "Apr 1", marketPrice: 38 },
  { date: "Apr 3", marketPrice: 62 },
  { date: "Apr 5", marketPrice: 49 },
  { date: "Apr 8", marketPrice: 52 },
  { date: "Apr 10", marketPrice: 47 },
  { date: "Apr 15", marketPrice: 45 },
];

// Extract month name for tick formatting
const getMonth = (dateStr) => dateStr.split(" ")[0];

export default function CoreWeavePriceChart() {
  return (
    <div className="mt-10 p-4 bg-white rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">
        CoreWeave Private Price Performance to IPO
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(value, index) => {
              const currentMonth = getMonth(value);
              const prevMonth =
                index > 0 ? getMonth(data[index - 1].date) : null;
              return currentMonth !== prevMonth ? currentMonth : "";
            }}
          />
          <YAxis domain={[35, 65]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="forgePrice"
            stroke="#f97316"
            name="Forge Price: CoreWeave"
          />
          <Line
            type="monotone"
            dataKey="marketPrice"
            stroke="#3b82f6"
            name="NSDQ: CRVW"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-right text-sm text-gray-400 mt-2">
        Forge Data as of 4/15/25
      </p>
    </div>
  );
}
