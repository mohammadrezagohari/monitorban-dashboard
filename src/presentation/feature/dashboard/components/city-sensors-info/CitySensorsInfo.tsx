import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { MobileIcon } from "src/presentation/assets/icons/MobileIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import SensorSituationCard from "src/presentation/components/common/sensor-situation-card/SensorSituationCard";
import { StyledCitySensorsInfo } from "./CitySensorsInfo.styles";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { JSX } from "react";

type SensorStatusType = "default" | "accept" | "warning" | "danger";

interface SensorT {
  id: number;
  status: SensorStatusType;
  name: string;
  icon: JSX.Element;
  data: number;
  hour: string;
}

interface ServerT {
  id: number;
  server_name: string;
  sensors: SensorT[];
}

interface CitySensorsInfoProps {
  city: string;
  servers: ServerT[];
}

// const sensors = [
//   {
//     id: 1,
//     status: "accept", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
//   {
//     id: 2,
//     status: "accept", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
//   {
//     id: 3,
//     status: "danger", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
//   {
//     id: 4,
//     status: "warning", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
//   {
//     id: 5,
//     status: "warning", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
//   {
//     id: 6,
//     status: "danger", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
//   {
//     id: 7,
//     status: "accept", // default, accept, warning, danger
//     name: "بالا TCL01",
//     icon: <MobileIcon />,
//     data: 3428,
//     hour: "6",
//   },
// ];

const amolServers: ServerT[] = [
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

const CitySensorsInfo = ({
  city = "ساری",
  servers = amolServers,
}: CitySensorsInfoProps) => {
  return (
    <>
      <PageTitle title={`اطلاعات سنسور شهر ${city}`} />

      <StyledCitySensorsInfo>
        {servers.map((server) => (
          <SectionContainer key={server.id}>
            <HeaderContainer>
              <SectionTitle>{server.server_name}</SectionTitle>
            </HeaderContainer>
            <MainContainer>
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
            </MainContainer>
          </SectionContainer>
        ))}
      </StyledCitySensorsInfo>
    </>
  );
};

export default CitySensorsInfo;
