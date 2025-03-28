import {
  IconWrapper,
  Text,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ServerRoomListProps } from "./IServerRoomListCard";
// import ButtonErrorSmallOutlined from "../buttons/ButtonErrorSmallOutlined";
// import ButtonPrimarySmallOutlined from "../buttons/ButtonPrimarySmallOutlined"; 

const ServerRoomList: React.FC<ServerRoomListProps> = ({
  icon,
  title,
  city,
}) => {
  const containerRef = useRef(null);
  const sensorRefs = useRef(new Map<number, HTMLSpanElement>());
  const [visibleCount, setVisibleCount] = useState(0);

  const [sensors, setSensors] = useState([
    "سنسور دمای اتاق",
    "سنسور رطوبت اتاق",
    "سنسور دمای رک",
    "سنسور دمای نشتی آب",
    "سنسور دمای کولر",
    "سنسور وضعیت برق",
    "سنسور وضعیت کولر",
    "سنسور اعتبار سیمکارت",
  ]);

  const updateVisibleCount = () => {
    if (!containerRef.current) return;
    // const containerWidth = containerRef.current.offsetWidth;
    const containerWidth = 600;
    let totalWidth = 0;
    let count = 0;
    // console.log("containerWidth: ", containerWidth);
    // console.log("sensorRefs: ", sensorRefs);
    for (let i = 0; i < sensors.length; i++) {
      const sensorWidth = sensorRefs.current.get(i)?.offsetWidth || 0;
      if (totalWidth + sensorWidth <= containerWidth) {
        totalWidth += sensorWidth;
        count++;
      } else {
        break;
      }
    }
    setVisibleCount(count);
  };
  useEffect(() => {
    setTimeout(updateVisibleCount, 0);
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, [sensors]);

  const renderSensors = () => {
    const visibleSensors = sensors.slice(0, 2);
    const remainingCount = sensors.length - 2;

    return (
      <>
        {visibleSensors.map((sensor, index) => (
          <Typography
            className="sensor"
            key={index}
            typography="body2"
            ref={(el) => {
              if (el) {
                sensorRefs.current.set(index, el);
              }
            }}
            sx={{
              color: "#C480FF",
              bgcolor: "#4D4259",
              borderRadius: "10px",
              padding: "10px",
              lineHeight: "1",
              width: "max-content",
            }}
          >
            {sensor}
          </Typography>
        ))}
        {remainingCount > 0 && (
          <Typography
            sx={{
              lineHeight: "1",
              color: "#C480FF",
              bgcolor: "#4D4259",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            +{remainingCount} سنسور
          </Typography>
        )}
      </>
    );
  };

  return (
    <Container
      className="main-container"
      sx={{
        bgcolor: "#373040",
        padding: "16px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Contents */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {/* Server Room Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "264px",
          }}
        >
          <IconWrapper bgcolor="#4D4259">{icon}</IconWrapper>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Text color="neutral.50" variant="h4">
              {title}
            </Text>
            <Text color="neutral.200" variant="body2">
              {city}
            </Text>
          </Box>
        </Box>

        {/* Sensors List */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "650px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            <Typography sx={{ color: "#B7B0BF", width: "max-content" }}>
              وضعیت کلی:
            </Typography>
            <Typography
              sx={{
                color: "#0FD36A",
                bgcolor: "#42594B",
                padding: "10px",
                borderRadius: "10px",
                width: "fit-content",
                typography: "body2",
                lineHeight: "100%",
              }}
            >
              نرمال
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              width: "100%",
            }}
          >
            <Typography sx={{ color: "#B7B0BF" }}>سنسور ها:</Typography>
            <Box
              className="sensorContainer"
              sx={{
                // display: "grid",
                // gridTemplateColumns: "repeat(4, auto)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "10px",
                // width: "100%  ",
              }}
              ref={containerRef}
            >
              {/* {sensors.map((sensor) => (
                <Typography
                  className="sensorElem"
                  key={sensor}
                  sx={{
                    color: "#C480FF",
                    bgcolor: "#4D4259",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "max-content",
                  }}
                >
                  {sensor}
                </Typography>
              ))} */}
              {renderSensors()}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* TODO:: باتن ها باید با کامپوننت باتن هایی که قبلا ساختیم جایگزین بشه(بعد از مرج شدن) */}
        <Button variant="outlined">حذف</Button>
        <Button variant="outlined">ویرایش</Button>
        {/* <ButtonErrorSmallOutlined>حذف</ButtonErrorSmallOutlined>
        <ButtonPrimarySmallOutlined>ویرایش</ButtonPrimarySmallOutlined> */}
      </Box>
    </Container>
  );
};

export default ServerRoomList;
