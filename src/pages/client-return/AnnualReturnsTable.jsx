import BodyBase from '../../components/text/BodyBase';

export default function AnnualReturnsTable({ data }) {
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
                className={`px-4 py-2 text-right ${row.fundrise_return < 0 ? 'text-red-500' : ''}`}
              >
                {row.fundrise_return}
              </td>
              <td
                className={`px-4 py-2 text-right ${row.public_reits_return < 0 ? 'text-red-500' : ''}`}
              >
                {row.public_reits_return}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
