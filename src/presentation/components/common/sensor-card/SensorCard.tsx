import { Box, useTheme } from "@mui/material";

import {
  Text,
  TextBox,
  Title,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Icon } from "../icons/components/Icon";
import { SensorCardProps } from "./ISensorCard";
import { SensorDataContainer, StyledSensorCard } from "./SensorCard.style";
import { IconWrapper } from "../icons/IconWrapper.style";

const SensorCard = ({ sensor }: SensorCardProps) => {
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

  return (
    <StyledSensorCard>
      {/* @ts-ignore */}
      <IconWrapper color={theme.palette.primary[200]}>
        <Icon name={icon} />
      </IconWrapper>
      <Box className="sensor-info">
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
