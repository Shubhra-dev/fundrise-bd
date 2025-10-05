import BodyBase from '../../components/text/BodyBase';

export default function AnnualReturnsTable() {
  const data = [
    { year: 2024, fundrise: '5.75%', reits: '4.33%' },
    { year: 2023, fundrise: '-7.45%', reits: '11.49%' },
    { year: 2022, fundrise: '1.50%', reits: '-25.10%' },
    { year: 2021, fundrise: '22.99%', reits: '39.88%' },
    { year: 2020, fundrise: '7.31%', reits: '-5.86%' },
    { year: 2019, fundrise: '9.16%', reits: '28.07%' },
    { year: 2018, fundrise: '8.81%', reits: '-4.10%' },
  ];

  return (
    <div className="w-full">
      <BodyBase extraClass="mb-2" textColor={`text-title`} fontWeight={`font-semibold`}>
        Annual returns of advisory client accounts
      </BodyBase>
      <table className="w-full border-spacing-y-2 text-left text-sm">
        <thead className="border-b text-sm border-b-black">
          <tr className="text-title font-bold font-sora">
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2 text-right">Fundrise¹</th>
            <th className="px-4 py-2 text-right">Public REITs²</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-b-gray-800 border-dotted text-sm">
              <td className="px-4 py-2 font-bold">{row.year}</td>
              <td
                className={`px-4 py-2 text-right ${row.fundrise.includes('-') ? 'text-red-500' : ''}`}
              >
                {row.fundrise}
              </td>
              <td
                className={`px-4 py-2 text-right ${row.reits.includes('-') ? 'text-red-500' : ''}`}
              >
                {row.reits}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
