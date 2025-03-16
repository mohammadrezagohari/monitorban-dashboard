import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import {
  DataContainer,
  DetailContainer,
  IconWrapper,
  Text,
} from "./SensorSituationCard.style";
import { SensorSituationCardProps } from "./ISensorSituationCard";
import { BulletIcon } from "src/presentation/components/common/icons/Bullet";

const SensorSituationCard: React.FC<SensorSituationCardProps> = ({
  status = "default", // default, accept, warning, danger
  name,
  icon,
  data,
  hour,
}) => {
  const iconColor =
    status === "accept"
      ? "#0B9D4E"
      : status === "danger"
      ? "#D02224"
      : status === "warning"
      ? "#F6C000"
      : "#F7F5FA26";
  const textColor =
    status === "accept"
      ? "#0FD36A"
      : status === "danger"
      ? "#E8383B"
      : status === "warning"
      ? "#F6C000"
      : "#8C32D9"; //TODO:: color should be changed to the correct color

  return (
    <BaseDashboardCard
      width="350px"
      topContent={
        <DataContainer>
          <Text color="neutral.100" fontStyle="body1">
            <IconWrapper bgColor={iconColor}>{icon}</IconWrapper>
            {name}:
          </Text>
          <Text color={status === "default" ? "neutral.main" : textColor}>
            {data}
          </Text>
        </DataContainer>
      }
      bottomContent={
        <DetailContainer>
          <Text color="neutral.200" fontStyle="body2">
            <BulletIcon fill={textColor} /> آخرین مقدار دریافتی:
          </Text>
          <Text color="neutral.200" fontStyle="body2">
            {hour} ساعت پیش
          </Text>
        </DetailContainer>
      }
    />
  );
};

export default SensorSituationCard;
