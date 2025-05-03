import React from "react";
import {
  IconWrapper,
  StatsContainer,
  Text,
  TextSpan,
} from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { ServerRoomCardProps } from "./IServerRoomCard";
import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import { BulletIcon } from "src/presentation/components/common/icons/Bullet";
import { Box } from "@mui/material";

const ServerRoomCard: React.FC<ServerRoomCardProps> = ({
  title,
  icon,
  city,
  sensor = 0,
  rack = 0,
  onHandleClick,
}) => {
  return (
    <BaseDashboardCard
      onHandleClick={onHandleClick}
      width="220px"
      topContent={
        <Text>
          <IconWrapper bgcolor="#4D4259">{icon}</IconWrapper>
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
            <BulletIcon fill="#C480FF" size={12} />
            {rack} رک
          </Text>
          <Text color="neutral.200" variant="body2">
            <BulletIcon fill="#F6B155" size={12} />
            {sensor} سنسور
          </Text>
        </StatsContainer>
      }
    />
  );
};

export default ServerRoomCard;
