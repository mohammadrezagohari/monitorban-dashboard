import {
  Text,
  TextBox,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Box, useTheme } from "@mui/material";
import { StyledSensorCard } from "./SensorCard.style";
import { SensorCardProps } from "./ISensorCard";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";

const SensorCard: React.FC<SensorCardProps> = ({
  icon,
  title,
  normalSensor,
  warningSensor,
  dangerSensor,
}) => {
  const totalSensor = normalSensor + warningSensor + dangerSensor;
  const theme = useTheme();

  return (
    <StyledSensorCard>
      <IconWrapper color={theme.palette.primary[200]}>{icon}</IconWrapper>
      <Box>
        <Text
          variant="body1"
          color="neutral.100"
          sx={{
            marginBottom: "0.5rem",
            fontSize: { xs: 14, md: 16 },
            fontWeight: 600,
          }}
        >
          {title}
        </Text>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
