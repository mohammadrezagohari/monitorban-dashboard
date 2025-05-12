import {
  Text,
  TextBox,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Box } from "@mui/material";
import { StyledSensorCard } from "./SensorCard.style";
import { SensorCardProps } from "./ISensorCard";
import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";

const SensorCard: React.FC<SensorCardProps> = ({
  icon,
  title,
  normalSensor,
  warningSensor,
  dangerSensor,
}) => {
  const totalSensor = normalSensor + warningSensor + dangerSensor;

  return (
    <StyledSensorCard>
      <IconWrapper>{icon}</IconWrapper>
      <Box>
        <Text
          variant="body1"
          color="neutral.100"
          sx={{ marginBottom: "0.5rem" }}
        >
          {title}
        </Text>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              کل
            </Text>
            <Text variant="body2" color="neutral.main">
              {totalSensor}
            </Text>
          </TextBox>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              نرمال
            </Text>
            <Text variant="body2" color="success.main">
              {normalSensor}
            </Text>
          </TextBox>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              اخطار
            </Text>
            <Text variant="body2" color="warning.500">
              {warningSensor}
            </Text>
          </TextBox>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              بحران
            </Text>
            <Text variant="body2" color="error.main">
              {dangerSensor}
            </Text>
          </TextBox>
        </Box>
      </Box>
    </StyledSensorCard>
  );
};

export default SensorCard;
