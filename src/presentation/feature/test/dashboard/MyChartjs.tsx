// import { ChartProps } from "../../App";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyChartjs = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
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
        data: [70, 65, 53, 77, 52, 36, 68, 28, 41],
        backgroundColor: "#C480FF",
        borderRadius: 50,
        barThickness: isDesktop ? 28 : 16,
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
      y: { beginAtZero: true },
      x: {
        ticks: {
          maxRotation: isDesktop ? 0 : 90,
          minRotation: isDesktop ? 0 : 90,
        },
      },
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Bar options={options} data={BarChartData} height={214} />
    </Box>
  );
};

export default MyChartjs;
