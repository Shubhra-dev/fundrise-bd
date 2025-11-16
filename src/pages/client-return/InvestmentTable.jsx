export default function InvestmentTable({ data = [] }) {
  return (
    <div className="">
      <table className="w-full">
        <thead className="text-title text-sm border-b border-b-black font-bold font-sora">
          <tr>
            <th className="px-4 py-2 font-medium text-left">Investment Objective</th>
            <th className="px-4 py-2 font-medium text-right">
              Currently declared
              <br />
              annualized yield
            </th>
            <th className="px-4 py-2 font-medium text-right">
              12 months ending
              <br />
              March 31, 2025
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-dotted border-gray-700 text-sm text-paragraph font-sora"
              >
                <td className="px-4 py-2">{row.objective}</td>
                <td className="px-4 py-2 text-right">{row.yield}</td>
                <td className="px-4 py-2 text-right">{row.months}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
