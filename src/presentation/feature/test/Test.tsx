import React from "react";
import ServerRoomCard from "../server room dashboard card/ServerRoomCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";
import SensorSituationCard from "../sensor situation card/SensorSituationCard";

const Test = () => {
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

export default Test;
