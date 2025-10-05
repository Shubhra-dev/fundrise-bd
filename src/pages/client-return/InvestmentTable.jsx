export default function InvestmentTable() {
  const data = [
    { objective: 'Income', yield: '7.51%', ending: '7.56%' },
    { objective: 'Balanced', yield: '0.25%', ending: '1.55%' },
    { objective: 'Growth', yield: '0.20%', ending: '0.63%' },
  ];

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
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-dotted border-gray-700 text-sm text-paragraph font-sora"
            >
              <td className="px-4 py-2">{row.objective}</td>
              <td className="px-4 py-2 text-right">{row.yield}</td>
              <td className="px-4 py-2 text-right">{row.ending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
