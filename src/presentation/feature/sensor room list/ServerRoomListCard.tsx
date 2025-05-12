import { Text } from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ServerRoomListProps } from "./IServerRoomListCard";
import { getServerRoomListCardStatus } from "./ServerRoomListCard.style";
import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";
// import ButtonErrorSmallOutlined from "../buttons/ButtonErrorSmallOutlined";
// import ButtonPrimarySmallOutlined from "../buttons/ButtonPrimarySmallOutlined";

const ServerRoomList: React.FC<ServerRoomListProps> = ({
  icon,
  title,
  city,
  status = "normal",
  sensors,
}) => {
  const {
    text: statusText,
    textColor: statusColor,
    bgColor: statusBgColor,
  } = getServerRoomListCardStatus(status);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [remainingCount, setRimainingCount] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      let usedWidth = 0; // عرض آیتم های نمایش داده شده
      let padding = 2 * 10; // پدینگ آیتم ها
      let gap = 8; // گپ بین آیتم ها

      const canvasText = document.createElement("canvas").getContext("2d");
      if (!canvasText) return;

      canvasText.font = "14px Dana"; // فونت مورد استفاده برای محاسبه عرض

      let tempVisibleItems: string[] = [];
      let tempRemainingCount = 0;

      const remainingText = `+${sensors.length} سنسور`;
      const remainingTextWidth =
        canvasText.measureText(remainingText).width + padding + gap;

      for (let i = 0; i < sensors.length; i++) {
        const sensorWidth =
          canvasText.measureText(sensors[i]).width + padding + gap;

        if (usedWidth + sensorWidth + remainingTextWidth <= containerWidth) {
          tempVisibleItems.push(sensors[i]);
          usedWidth += sensorWidth;
        } else {
          tempRemainingCount = sensors.length - i;
          break;
        }
      }

      if (tempRemainingCount === 1) {
        const lastItemWidth =
          canvasText.measureText(sensors[sensors.length - 1]).width +
          padding +
          gap;
        if (usedWidth + lastItemWidth <= containerWidth) {
          tempVisibleItems.push(sensors[sensors.length - 1]);
          tempRemainingCount = 0;
        }
      }

      setVisibleItems(tempVisibleItems);
      setRimainingCount(tempRemainingCount);
    };

    updateVisibleCount();
    window.addEventListener("resize", () => {
      updateVisibleCount();
    });
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, [sensors]);

  return (
    <Container
      className="main-container"
      sx={{
        bgcolor: "#373040",
        padding: "16px",
        borderRadius: "15px",
        // display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        display: "grid",
        gridTemplateColumns: "264px auto 198px",
      }}
    >
      {/* Server Room Name */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "264px",
          flexShrink: 0,
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
          // width: "650px",
        }}
      >
        {/* situation  */}
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
              color: statusColor,
              bgcolor: statusBgColor,
              padding: "10px",
              borderRadius: "10px",
              width: "fit-content",
              typography: "body2",
              lineHeight: "100%",
            }}
          >
            {statusText}
          </Typography>
        </Box>

        {/* sensors  */}
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
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "10px",
              width: "100%  ",
            }}
            ref={containerRef}
          >
            {visibleItems.map((sensor, index) => (
              <Typography
                key={index}
                variant="body2"
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
            ))}
            {remainingCount > 0 && (
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "nowrap",
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "max-content",
                }}
              >
                + {remainingCount} سنسور
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifySelf: "end",
          flexShrink: 0,
        }}
      >
        {/* TODO:: باتن ها باید با کامپوننت باتن هایی که قبلا ساختیم جایگزین بشه(بعد از مرج شدن) */}
        <Button variant="outlined" color="error">
          حذف
        </Button>
        <Button variant="outlined">ویرایش</Button>
        {/* <ButtonErrorSmallOutlined>حذف</ButtonErrorSmallOutlined>
        <ButtonPrimarySmallOutlined>ویرایش</ButtonPrimarySmallOutlined> */}
      </Box>
      {/* </Box> */}
    </Container>
  );
};

export default ServerRoomList;
