import React, { useEffect, useRef, useState } from "react";
import ServerRoomCard from "../server room dashboard card/ServerRoomCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";
import SensorSituationCard from "../sensor situation card/SensorSituationCard";
import SensorCategoryCard from "../sensor category card/SensorCategoryCard";
import TemperatureCard from "../temperature card/TemperatureCard";
import ServerRoomList from "../sensor room list/ServerRoomListCard";
import { Box, Typography } from "@mui/material";

interface Props {
  items: string[];
}

const items = [
  "سنسور دمای اتاق",
  "سنسور رطوبت اتاق",
  "سنسور دمای رک",
  "سنسور دمای نشتی آب",
  "سنسور دمای کولر",
  "سنسور وضعیت برق",
  "سنسور وضعیت کولر",
  "سنسور اعتبار سیمکارت",
];

const LimitedDisplay: React.FC<Props> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [remainingCount, setRemainingCount] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth; // عرض باکس
      let usedWidth = 0; // عرضی استفاده شده
      const padding = 8; // فاصله بین آیتم‌ها

      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;

      ctx.font = "14px Dana"; // فونت مورد استفاده برای محاسبه عرض

      let tempVisibleItems: string[] = [];
      let tempRemainingCount = 0;

      // محاسبه عرض واقعی "+X آیتم دیگر"
      const remainingText = `+${items.length} سنسور`;
      const remainingTextWidth =
        ctx.measureText(remainingText).width + 20 + padding;

      for (let i = 0; i < items.length; i++) {
        const textWidth = ctx.measureText(items[i]).width + 20 + padding;
        // console.log("textWidth:: ", textWidth, items[i]);

        // اگر این آیتم اضافه شود، آیا هنوز "+X آیتم دیگر" جا می‌شود؟
        if (usedWidth + textWidth + remainingTextWidth <= containerWidth) {
          tempVisibleItems.push(items[i]);
          usedWidth += textWidth;
        } else {
          tempRemainingCount = items.length - i;
          break;
        }
        // console.log("usedWidth::", usedWidth);
      }

      // **اصلاح نمایش آخرین آیتم**
      // اگر فقط یک آیتم باقی مانده و جا می‌شود، دیگر نیازی به "+X آیتم دیگر" نیست
      if (tempRemainingCount === 1) {
        const lastItemWidth =
          ctx.measureText(items[items.length - 1]).width + 20 + padding;
        if (usedWidth + lastItemWidth <= containerWidth) {
          tempVisibleItems.push(items[items.length - 1]);
          tempRemainingCount = 0;
        }
      }

      setVisibleItems(tempVisibleItems);
      setRemainingCount(tempRemainingCount);
    };

    console.log("__remainingCount__test__", remainingCount);
    

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, [items]);

  return (
    <Box
      ref={containerRef}
      display="flex"
      gap={1}
      overflow="hidden"
      bgcolor="red"
    >
      {visibleItems.map((item, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{
            whiteSpace: "nowrap",
            padding: "10px",
            bgcolor: "green",
            borderRadius: "10px",
            color: "#eee",
          }}
        >
          {item}
        </Typography>
      ))}
      {remainingCount > 0 && (
        <Typography
          variant="body2"
          sx={{
            whiteSpace: "nowrap",
            padding: "10px",
            bgcolor: "green",
            borderRadius: "10px",
            color: "#eee",
          }}
        >
          +{remainingCount} سنسور
        </Typography>
      )}
    </Box>
  );
};

const Test = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#222",
        padding: "100px 0",
      }}
    >
      <div style={{ padding: "20px" }}>
        <LimitedDisplay items={items} />
      </div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          // gap: "16px",
          // justifyContent: "center",
          // alignItems: "center",
          // minHeight: "100vh",
          padding: "20px",
        }}
      >
        <ServerRoomList
          icon={<MobileIcon />}
          title="اتاق سرور معاونت"
          city="ساری"
          sensors={items}
        />
        <ServerRoomList
          icon={<MobileIcon />}
          title="اتاق سرور معاونت"
          city="ساری"
          sensors={items}
          status="warning"
          />
        <ServerRoomList
          icon={<MobileIcon />}
          title="اتاق سرور معاونت"
          city="ساری"
          sensors={items}
          status="error"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <ServerRoomCard
          icon={<MobileIcon />}
          title="معاونت درمان"
          city="ساری"
          rack={10}
          sensor={10}
        />
        {/* <SensorSituationCard
          icon={<MobileIcon />}
          hour="6"
          data={3526}
          name="بالا TCL01"
        /> */}
        <SensorSituationCard
          // status="accept"
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
        {/* <TemperatureCard
          // status="accept"
          icon={<MobileIcon />}
          hour="6"
          name="نام سنسور"
          percentData={67}
          incrementData={33}
          decrementData={1}
        /> */}
        <TemperatureCard
          status="accept"
          icon={<MobileIcon />}
          hour="6"
          name="نام سنسور"
          percentData={67}
          incrementData={33}
          decrementData={1}
        />
        <TemperatureCard
          status="warning"
          icon={<MobileIcon />}
          hour="6"
          name="نام سنسور"
          percentData={67}
          incrementData={33}
          decrementData={1}
        />
        <TemperatureCard
          status="danger"
          icon={<MobileIcon />}
          hour="6"
          name="نام سنسور"
          percentData={67}
          incrementData={33}
          decrementData={1}
        />

        <SensorCategoryCard
          icon={<MobileIcon />}
          title="اتاق سرور معاونت"
          normalSensor={8}
          warningSensor={6}
          dangerSensor={4}
        />
      </div>
    </div>
  );
};

export default Test;
