import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {}
  },
  backgroundColor: "red",
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [100, 95, 70, 75, 72, 65, 71, 63, 60, 58, 56, 58],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "",
      data: [100, 92, 72, 71, 63, 62, 60, 58, 55, 35, 15, 5],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

type BodyGraphProps = {
  title?: string
}

export default function BodyGraph({ title }: BodyGraphProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: !!title,
        text: title
      }
    },
    backgroundColor: "red",
  };
  
  useEffect(() => {
    ChartJS.register({
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx && ctx.save();
        ctx && (ctx.globalCompositeOperation = "destination-over");
        ctx && (ctx.fillStyle = "#2E2E2E");
        ctx && ctx.fillRect(0, 0, chart.width, chart.height);
        ctx && ctx.restore();
      },
    });
  }, []);
  return (
      <Line options={options} data={data} className="!w-full" />
  );
}
