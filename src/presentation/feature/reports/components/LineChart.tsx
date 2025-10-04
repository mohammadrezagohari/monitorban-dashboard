import { Box, useTheme } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const dataValue = [60, 50, 32, 49, 85, 28, 71, 39, 68, 52, 58, 30];

function LineChart({ labelsChart = labels, dataChart = dataValue }) {
  const theme = useTheme();

  const data = {
    labels: [...labelsChart].reverse(),
    datasets: [
      {
        data: [...dataChart].reverse(),
        borderColor: theme.palette.primary[100],
        tension: 0.3,
        pointStyle: false,
        showLine: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        titleColor: "red",
        bodyColor: "green",
        titleFont: {
          family: "Dana-Regular",
          size: 18,
          weight: 600,
        },
        bodyFont: {
          family: "Dana-Regular",
          size: 14,
          weight: 500,
        },
        padding: 10,
        cornerRadius: 10,
      },
    },

    scales: {
      y: {
        offset: true,
        type: "linear",
        min: 0,
        max: 100,
        ticks: {
          padding: 24,
          stepSize: 20,
          font: {
            family: "Dana-Regular",
            size: 16,
            weight: 400,
          },
          color: "#FFFFFF",
        },
        position: "right",
        grid: {
          drawTicks: false,
          color: "#FFFFFF1A",
        },
        border: {
          display: false,
        },
      },
      x: {
        offset: false,
        type: "category",
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          padding: 24,
          font: {
            family: "Dana-Regular",
            size: 16,
            weight: 400,
          },
          color: "#FFFFFF",
        },
        border: {
          display: false,
        },
      },
    },
    locale: "fa-IR",
  };

  return (
    <Box height={300}>
      {/* <MainContainer> */}
      <Line data={data} options={options} />
      {/* </MainContainer> */}
    </Box>
  );
}

export default LineChart;
