import { Box, useTheme } from "@mui/material";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { SensorCardProps } from "./ISensorCard";
import { StyledSensorCard } from "./SensorCard.style";
import {
  Text,
  TextBox,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";

const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
  const {
    icon,
    name,
    normalSensorCount,
    warningSensorCount,
    dangerSensorCount,
  } = sensor;
  const totalSensorCount =
    normalSensorCount + warningSensorCount + dangerSensorCount;
  const theme = useTheme();

  const SenesorIcon = iconsMap[icon as keyof typeof iconsMap];

  return (
    <StyledSensorCard>
      <IconWrapper color={theme.palette.primary[200]}>
        <SenesorIcon />
      </IconWrapper>
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
          {name}
        </Text>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              کل
            </Text>
            <Text variant="body2" color="neutral.main">
              {totalSensorCount}
            </Text>
          </TextBox>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              نرمال
            </Text>
            <Text variant="body2" color="success.main">
              {normalSensorCount}
            </Text>
          </TextBox>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              اخطار
            </Text>
            <Text variant="body2" color="warning.500">
              {warningSensorCount}
            </Text>
          </TextBox>
          <TextBox>
            <Text variant="caption" color="neutral.100">
              بحران
            </Text>
            <Text variant="body2" color="error.main">
              {dangerSensorCount}
            </Text>
          </TextBox>
        </Box>
      </Box>
    </StyledSensorCard>
  );
};

export default SensorCard;
