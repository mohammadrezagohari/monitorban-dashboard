import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { Box, Typography } from "@mui/material";
import SensorSituationCard from "../../sensor situation card/SensorSituationCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";

const sensors = [
  {
    status: "accept", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
  {
    status: "accept", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
  {
    status: "danger", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
  {
    status: "warning", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
  {
    status: "warning", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
  {
    status: "danger", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
  {
    status: "accept", // default, accept, warning, danger
    name: "بالا TCL01",
    icon: <MobileIcon />,
    data: 3428,
    hour: "6",
  },
];

const amolServers = [
  {
    server_name: "کلینیک راضی",
    sensors: [
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
    ],
  },
  {
    server_name: "دیتا سنتر آمل امام رضا",
    sensors: [
      {
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
    ],
  },
  {
    server_name: "دیتا سنتر رازی قائمشهر",
    sensors: [
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
    ],
  },
];

const CitySensorsInfo: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2" color="neutral.main" marginBottom="1rem">
        اطلاعات سنسور شهر آمل
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {amolServers.map((server) => (
          <SectionContainer>
            <HeaderContainer>
              <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
                {server.server_name}
              </Typography>
            </HeaderContainer>
            <MainContainer>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  //   justifyContent: "space-between"
                  gap: "1rem",
                }}
              >
                {server.sensors.map((sensor) => (
                  <SensorSituationCard
                    status={sensor.status}
                    name={sensor.name}
                    icon={sensor.icon}
                    data={sensor.data}
                    hour={sensor.hour}
                  />
                ))}
              </Box>
            </MainContainer>
          </SectionContainer>
        ))}
      </Box>
    </Box>
  );
};

export default CitySensorsInfo;
