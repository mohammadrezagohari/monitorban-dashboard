import SensorSituationCard from "src/presentation/feature/sensor situation card/SensorSituationCard";
import React from "react";
import ServerRoomCard from "src/presentation/feature/server room dashboard card/ServerRoomCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";

export const DashboardCard = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#222",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "100px 0",
        }}
      >
        <ServerRoomCard
          icon={<MobileIcon />}
          title="معاونت درمان"
          city="ساری"
        />
        <SensorSituationCard
          icon={<MobileIcon />}
          hour="6"
          data={3526}
          name="بالا TCL01"
        />
        <SensorSituationCard
          status="accept"
          icon={<MobileIcon />}
          hour="6"
          data={3526}
          name="بالا TCL01"
        />
        <SensorSituationCard
          status="danger"
          icon={<MobileIcon />}
          hour="6"
          data={3526}
          name="بالا TCL01"
        />
        <SensorSituationCard
          status="warning"
          icon={<MobileIcon />}
          hour="6"
          data={3526}
          name="بالا TCL01"
        />
      </div>
    </div>
  );
};
