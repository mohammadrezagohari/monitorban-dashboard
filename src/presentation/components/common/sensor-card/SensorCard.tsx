import { Box, useTheme } from "@mui/material";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { SensorCardProps } from "./ISensorCard";
import { SensorDataContainer, StyledSensorCard } from "./SensorCard.style";
import {
  Text,
  TextBox,
  Title,
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
      {/* @ts-ignore */}
      <IconWrapper color={theme.palette.primary[200]}>
        <SenesorIcon />
      </IconWrapper>
      <Box>
        <Title variant="body1" color="neutral.100">
          {name}
        </Title>

        <SensorDataContainer>
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
        </SensorDataContainer>
      </Box>
    </StyledSensorCard>
  );
};

export default SensorCard;
