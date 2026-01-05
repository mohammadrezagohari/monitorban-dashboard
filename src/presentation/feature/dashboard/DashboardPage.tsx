import React from "react";

import Row from "@/presentation/components/common/row/Row";
import Map from "@/presentation/feature/dashboard/components/map/Map";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import Statistic from "@/presentation/feature/dashboard/components/statistic/Statistic";
import LatestUsers from "./components/latest-users/LatestUsers";
import Announcements from "./components/announcementes/Announcements";
import SensorsDetails from "./components/sensors-details/SensorsDetails";
import ServerRoomsSlider from "@/presentation/feature/dashboard/components/server-rooms-slider/ServerRoomsSlider";
import TemperatureBarChart from "./components/temperature-bar-chart/TemperatureBarChart";
import { StyledDashboardContainer } from "./DashboardPage.styles";

export const DashboardPage = () => {
  // const [chartSelectValue, setChartSelectValue] = useState("annual");
  // const [status, setStatus] = useState("error");
  // const prevBtn = useRef<HTMLButtonElement | null>(null);
  // const nextBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <PageTitle title="داشبورد" />

      <StyledDashboardContainer>
        <Row type="flex">
          <Announcements />
          <Map />
        </Row>

        <Row>
          <ServerRoomsSlider />
        </Row>

        <Row type="grid">
          <SensorsDetails />

          <LatestUsers />
          <Statistic />
        </Row>

        <Row>
          <TemperatureBarChart />
        </Row>
      </StyledDashboardContainer>
    </>
  );
};
