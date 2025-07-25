import React from "react";
import { Box, useTheme } from "@mui/material";

import { BulletIcon } from "src/presentation/assets/icons/BulletIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import { ServerRoomCardProps } from "./IServerRoomCard";
import {
  StatsContainer,
  Text,
  TextSpan,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";

const ServerRoomCard: React.FC<ServerRoomCardProps> = ({
  title,
  icon,
  city,
  sensor = 0,
  rack = 0,
  onHandleClick,
}) => {
  const theme = useTheme();

  return (
    <BaseDashboardCard
      onHandleClick={onHandleClick}
      width="220px"
      topContent={
        <Text>
          <IconWrapper>{icon}</IconWrapper>
          <Box sx={{ overflow: "hidden", maxWidth: "130px" }}>
            <TextSpan color="neutral.100" variant="body1">
              {title}
            </TextSpan>
            <Text color="neutral.200" variant="body2">
              {city}
            </Text>
          </Box>
        </Text>
      }
      bottomContent={
        <StatsContainer>
          <Text color="neutral.200" variant="body2">
            <BulletIcon color={theme.palette.primary[300]} size={12} />
            {rack} رک
          </Text>
          <Text color="neutral.200" variant="body2">
            <BulletIcon color={theme.palette.secondary[300]} size={12} />
            {sensor} سنسور
          </Text>
        </StatsContainer>
      }
    />
  );
};

export default ServerRoomCard;
