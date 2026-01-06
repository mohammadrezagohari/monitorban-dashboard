// import { ChartProps } from "../../App";

import useScreenSize from "@/presentation/hooks/useScreenSize";
import { Box, useTheme } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BarChartProps } from "./IBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartjs = ({ data }: { data: BarChartProps[] }) => {
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  const BarChartData = {
    labels: [
      "معاونت درمان",
      "بیمارستان رازی",
      "دانشگاه پیامبر اعظم",
      "دانشگاه علوم پزشکی",
      "درمانگاه ولایت",
      "دیتا سنتر خاتم بهشهر",
      "دیتا سنتر بوعلی",
      "دیتا سنتر زیرآب",
      "دیتا سنتر دانشگاه",
    ],
    datasets: [
      {
        // label: "Test Chart",
        // data: [70, 65, 53, 77, 52, 36, 68, 28, 41],
        data: data?.[0]?.values || [],
        // @ts-ignore
        backgroundColor: theme.palette.primary[300],
        borderRadius: 50,
        barThickness: isMediumScreen ? 28 : 16,
        // height: 193,
        // width: "100%",
        barPercentage: 0.2,
        color: "green",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        offset: false,
        min: 0,
        max: 100,
        grid: {
          drawTicks: false,
          lineWidth: 1,
          color: theme.palette.neutral[600],
        },
        border: {
          color: theme.palette.neutral[600],
        },
        ticks: {
          padding: 16,
          stepSize: 20,
          color: theme.palette.neutral[200],
          font: {
            family: "Dana-Regular",
            size: 12,
            weight: 400,
          },
        },
      },
      x: {
        offset: true,
        grid: {
          display: false,
          drawTicks: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 16,
          maxRotation: isMediumScreen ? 0 : 90,
          minRotation: isMediumScreen ? 0 : 90,
          color: theme.palette.neutral[200],
          font: {
            family: "Dana-Regular",
            size: 12,
            weight: 400,
          },
        },
      },
    },
  };

  return (
    <Box sx={{ width: "100%", position: "relative", right: 12 }}>
      <Bar
        options={options}
        data={BarChartData}
        height={isMediumScreen ? 214 : 334}
      />
    </Box>
  );
};

export default BarChartjs;
