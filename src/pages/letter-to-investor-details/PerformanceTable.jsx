import React from "react";

const performanceData = [
  { label: "FPMI", L1M: "4.92%", L3M: "37.08%", L12M: "39.98%" },
  { label: "FAPMI", L1M: "0.27%", L3M: "9.51%", L12M: "24.16%" },
  { label: "SPY", L1M: "-5.86%", L3M: "-4.55%", L12M: "8.30%" },
];

export default function PerformanceTable() {
  return (
    <div className="w-full mt-6 bg-white text-sm">
      <table className="w-full text-center border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b">L1M</th>
            <th className="py-2 px-4 border-b">L3M</th>
            <th className="py-2 px-4 border-b">L12M</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((row) => (
            <tr key={row.label}>
              <td className="py-2 px-4 border-b font-medium text-left">
                {row.label}
              </td>
              <td className="py-2 px-4 border-b">{row.L1M}</td>
              <td className="py-2 px-4 border-b">{row.L3M}</td>
              <td className="py-2 px-4 border-b">{row.L12M}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2 text-right pr-2 pb-2">
        Forge Data through 3/31/25
      </p>
    </div>
  );
}
