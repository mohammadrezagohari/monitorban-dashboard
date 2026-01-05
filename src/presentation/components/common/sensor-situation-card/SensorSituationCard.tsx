import { useTheme } from "@mui/material";
import BaseDashboardCard from "@/presentation/components/common/dashboard-card/BaseDashboardCard";
import {
  DataContainer,
  getStatusColors,
  Text,
} from "@/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Icon } from "../icons/components/Icon";
import { IconWrapper } from "../icons/IconWrapper.style";
import { SensorSituationCardProps } from "./ISensorSituationCard";

const SensorSituationCard = ({
  status = "default", // default, accept, warning, danger
  name,
  icon,
  data,
  hour,
}: SensorSituationCardProps) => {
  // const iconColor =
  //   status === "accept"
  //     ? "#0B9D4E"
  //     : status === "danger"
  //     ? "#D02224"
  //     : status === "warning"
  //     ? "#F6C000"
  //     : "#F7F5FA26";
  // const textColor =
  //   status === "accept"
  //     ? "#0FD36A"
  //     : status === "danger"
  //     ? "#E8383B"
  //     : status === "warning"
  //     ? "#F6C000"
  //     : "#8C32D9"; //TODO:: color should be changed

  const { icon: iconBgColor, text: textColor } = getStatusColors(status);
  const theme = useTheme();

  return (
    <BaseDashboardCard
      // width="350px"
      topContent={
        <DataContainer>
          <Text color="neutral.100" variant="body1">
            <IconWrapper bgcolor={iconBgColor || theme.palette.neutral[500]}>
              <Icon name={icon || "sensor"} />
            </IconWrapper>
            {name}:
          </Text>
          <Text
            color={
              status !== "default" ? textColor : theme.palette.neutral.main
            }
          >
            {data}
          </Text>
        </DataContainer>
      }
      bottomContent={
        <DataContainer>
          <Text color="neutral.200" variant="body2">
            <Icon name="bullet" color={textColor} /> آخرین مقدار دریافتی:
          </Text>
          <Text color="neutral.200" variant="body2">
            {hour} ساعت پیش
          </Text>
        </DataContainer>
      }
    />
  );
};

export default SensorSituationCard;
