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
import useSWR from "swr";
import { fetchBodyGraph } from "../apis/myRecord";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type BodyGraphProps = {
  title?: string;
};

export default function BodyGraph({ title }: BodyGraphProps) {
  const { data } = useSWR("getBodyGraph", fetchBodyGraph);
  const dataBody = {
    labels: [...data?.data?.labels || []],
    datasets: [...data?.data?.datasets || []]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
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
    <Line
      options={options}
      data={dataBody}
      className="!w-full"
    />
  );
}
