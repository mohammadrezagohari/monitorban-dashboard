import { Box, useMediaQuery, useTheme } from "@mui/material";

import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import {
  DataContainer,
  Text,
  TextBox,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { IconButtonWithBorder } from "../IconButtonWithBorder";
import { IconWrapper } from "../icons/IconWrapper.style";
import { Icon } from "../icons/components/Icon";
import { SensorCategoryCardProps } from "./ISensorCategoryCard";

const SensorCategoryCard = ({
  icon,
  title,
  normalSensor,
  warningSensor,
  dangerSensor,
  onClick,
}: SensorCategoryCardProps) => {
  const totalSensor = normalSensor + warningSensor + dangerSensor;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <BaseDashboardCard
      // width="350px"
      topContent={
        <DataContainer>
          <Text
            color="neutral.100"
            variant={isDesktop ? "h4" : "body2"}
            component="h5"
          >
            <IconWrapper bgcolor="#F7F5FA26">
              <Icon name={icon} />
            </IconWrapper>
            {title}
          </Text>
        </DataContainer>
      }
      bottomContent={
        <DataContainer>
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

          <IconButtonWithBorder sx={{}} onClick={onClick}>
            <Icon name="arrowLeft" color="#7F6A95" w={16} h={16} />
          </IconButtonWithBorder>
        </DataContainer>
      }
    />
  );
};

export default SensorCategoryCard;
