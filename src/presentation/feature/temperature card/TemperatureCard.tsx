import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import { BulletIcon } from "src/presentation/components/common/icons/Bullet";
import {
  DataContainer,
  getStatusColors,
  IconWrapper,
  Text,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { IncrementIcon } from "src/presentation/components/common/icons/IncrementIcon";
import { DecrementIcon } from "src/presentation/components/common/icons/DecrementIcon";
import { TemperatureCardProps } from "./ITemperatureCard";

const TemperatureCard: React.FC<TemperatureCardProps> = ({
  status = "default", // default, accept, warning, danger
  name,
  icon,
  percentData,
  incrementData,
  decrementData,
  hour,
}) => {
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

  return (
    <BaseDashboardCard
      width="350px"
      topContent={
        <DataContainer>
          <Text color="neutral.100" variant="body1">
            <IconWrapper bgcolor={iconBgColor}>{icon}</IconWrapper>
            {name}:
          </Text>
          <Text color={textColor}>
            {percentData}%
          </Text>
        </DataContainer>
      }
      bottomContent={
        <>
          <DataContainer>
            <Text color="neutral.200" variant="body2">
              <BulletIcon fill={textColor} /> آخرین مقدار دریافتی:
            </Text>
            <Text color="neutral.200" variant="body2">
              {hour} ساعت پیش
            </Text>
          </DataContainer>
          <DataContainer>
            <Text color="neutral.200" variant="body2">
              <BulletIcon fill={textColor} /> دیتا سنتر دانشگاه:
            </Text>
            <Text color="neutral.200" variant="body2" sx={{ gap: "1.5rem" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "2px",
                }}
              >
                <DecrementIcon />
                {decrementData}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "2px",
                }}
              >
                {incrementData}
                <IncrementIcon />
              </span>
            </Text>
          </DataContainer>
        </>
      }
    />
  );
};

export default TemperatureCard;
