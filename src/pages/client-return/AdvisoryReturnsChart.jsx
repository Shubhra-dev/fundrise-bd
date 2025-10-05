import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import SubHeading from '../../components/text/SubHeading';
import BodyBase from '../../components/text/BodyBase';
import CaptionSmall from '../../components/text/CaptionSmall';

// Register chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

const years = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const values = [2.4, 3.6, 12.2, 31.8, 36.0, 43.4, 51.1, 61.8, 71.6];
const lower = [-5, -7, 0, 15, 20, 28, 39, 46, 70];
const upper = [10, 12, 25, 48, 52, 60, 62, 78, 80];

const data = {
  labels: years,
  datasets: [
    // Lower bound
    {
      label: '± 1 Std Deviation',
      data: lower,
      borderColor: 'transparent',
      backgroundColor: 'rgba(37,99,235,0.15)', // Tailwind blue-600 with opacity
      fill: '+1', // Fill up to upper dataset
      pointRadius: 0,
    },
    // Upper bound
    {
      label: '± 1 Std Deviation',
      data: upper,
      borderColor: 'transparent',
      backgroundColor: 'rgba(37,99,235,0.15)',
      fill: '-1', // Fill down to lower dataset
      pointRadius: 0,
    },
    // Main line
    {
      label: 'Average returns',
      data: values,
      borderColor: '#2563eb',
      backgroundColor: '#2563eb',
      tension: 0.3,
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#2563eb',
      pointBorderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        font: { size: 16, weight: 'bold' },
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.parsed.y}%`,
      },
    },
    datalabels: false, // we’ll add custom labels manually
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Years elapsed since initial investment',
      },
      ticks: {
        callback: (val, idx) => `Year ${years[idx]}`,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Cumulative net returns',
      },
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
  animation: {
    onComplete: (chart) => {
      const { ctx } = chart.chart;
      ctx.save();
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#111827'; // Tailwind gray-900
      ctx.textAlign = 'center';

      chart.chart.data.datasets[2].data.forEach((val, i) => {
        const meta = chart.chart.getDatasetMeta(2); // main line dataset
        const pt = meta.data[i];
        ctx.fillText(`${val}%`, pt.x, pt.y - 15);
      });
    },
  },
};

export default function AdvisoryReturnsChart() {
  return (
    <div className="bg-white rounded-xl shadow sm:p-5">
      <SubHeading font={`font-display`} extraClass={`pb-2`}>
        Advisory client returns by years on this platform
      </SubHeading>
      <BodyBase extraClass={`pb-2`}>
        Average returns for each investor based on how many years they've been invested in Fundrise
        between 2015–2025
      </BodyBase>

      <div className="w-full h-[420px]">
        <Line data={data} options={options} />
      </div>
      <CaptionSmall align={`text-center`} extraClass={`py-4`}>
        <a href="" className="underline text-info-dark">
          Learn more
        </a>{' '}
        about the assumptions in this section. The foregoing performance information is presented
        solely with regard to the advisory client performance of the clients of Fundrise Advisors,
        LLC pursuant to the Investment Advisers Act of 1940, and does not represent the performance
        of any individual investor or any individual or aggregate performance of any funds with
        offerings qualified pursuant Regulation A of the Securities Act (the "Regulation A Funds").
        For more information about the Regulation A Funds, and their corresponding Forms 1-A,
        including their individual performance information, please{' '}
        <a href="" className="underline text-info-dark">
          click here
        </a>
        .
      </CaptionSmall>
    </div>
  );
}
