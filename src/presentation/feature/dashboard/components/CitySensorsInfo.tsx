import { Box } from "@mui/material";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { MobileIcon } from "src/presentation/assets/icons/MobileIcon";
// import SensorSituationCard from "src/presentation/";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SensorSituationCard from "src/presentation/components/common/sensor-situation-card/SensorSituationCard";
import { GridBox } from "src/presentation/components/common/GridBox";

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
    id: 1,
    server_name: "کلینیک راضی",
    sensors: [
      {
        id: 1,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 2,
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 3,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 4,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 5,
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 6,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
    ],
  },
  {
    id: 2,
    server_name: "دیتا سنتر آمل امام رضا",
    sensors: [
      {
        id: 1,
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 2,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 3,
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 4,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 5,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 6,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 7,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 8,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 9,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 10,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
    ],
  },
  {
    id: 3,
    server_name: "دیتا سنتر رازی قائمشهر",
    sensors: [
      {
        id: 1,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 2,
        status: "danger", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 3,
        status: "warning", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
      {
        id: 4,
        status: "accept", // default, accept, warning, danger
        name: "بالا TCL01",
        icon: <MobileIcon />,
        data: 3428,
        hour: "6",
      },
    ],
  },
];

const CitySensorsInfo = ({ city = "ساری", servers }: { city: string }) => {
  console.log(`اطلاعات سنسور شهر ${(<span>{city}</span>)}`);

  return (
    <>
      <PageTitle title={`اطلاعات سنسور شهر ${city}`} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {amolServers.map((server) => (
          <SectionContainer key={server.id}>
            <HeaderContainer>
              <SectionTitle>{server.server_name}</SectionTitle>
            </HeaderContainer>
            <MainContainer>
              {/* <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  //   justifyContent: "space-between"
                  gap: 2,
                }}
              > */}
              <GridBox>
                {server.sensors.map((sensor) => (
                  <SensorSituationCard
                    status={sensor.status}
                    name={sensor.name}
                    icon={sensor.icon}
                    data={sensor.data}
                    hour={sensor.hour}
                    key={sensor.id}
                  />
                ))}
              </GridBox>
              {/* </Box> */}
            </MainContainer>
          </SectionContainer>
        ))}
      </Box>
    </>
  );
};

export default CitySensorsInfo;
