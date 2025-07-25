import React from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import { LeftArrowIcon } from "src/presentation/assets/icons/LeftArrowIcon";
import { SensorCategoryCardProps } from "./ISensorCategoryCard";
import {
  DataContainer,
  Text,
  TextBox,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";

const SensorCategoryCard: React.FC<SensorCategoryCardProps> = ({
  icon,
  title,
  normalSensor,
  warningSensor,
  dangerSensor,
  onClick,
}) => {
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
            <IconWrapper bgcolor="#F7F5FA26" >
              {icon}
            </IconWrapper>
            {title}
          </Text>
        </DataContainer>
      }
      bottomContent={
        <DataContainer>
          {/* <Text variant="caption" color="neutral.100">
            کل <Text variant="body2">{totalSensor}</Text>
            نرمال
            <Text variant="body2" color="success.main">
              {normalSensor}
            </Text>
            اخطار
            <Text variant="body2" color="warning.500">
              {warningSensor}
            </Text>
            بحران
            <Text variant="body2" color="error.main">
              {dangerSensor}
            </Text>
          </Text> */}
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
          {/* <button
            style={{
              border: "1px solid #7F6A95",
              borderRadius: "10px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <LeftArrowIcon stroke="#7F6A95" size={16} />
          </button> */}
          <IconButton
            sx={{
              border: "1px solid #7F6A95",
              borderRadius: "10px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
            onClick={onClick}
          >
            <LeftArrowIcon stroke="#7F6A95" size={16} />
          </IconButton>
        </DataContainer>
      }
    />
  );
};

export default SensorCategoryCard;
