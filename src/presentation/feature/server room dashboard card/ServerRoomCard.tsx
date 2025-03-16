import React from "react";
import {
  City,
  IconWrapper,
  InfoGrid,
  StatItem,
  StatsContainer,
  Title,
} from "./ServerRoomCard.style";
import { ServerRoomCardProps } from "./IServerRoomCard";
import BaseDashboardCard from "src/presentation/components/common/dashboard-card/BaseDashboardCard";
import { BulletIcon } from "src/presentation/components/common/icons/Bullet";

const ServerRoomCard: React.FC<ServerRoomCardProps> = ({
  title,
  icon,
  city,
  sensor = 0,
  rack = 0,
}) => {
  return (
    <BaseDashboardCard
      width="220px"
      topContent={
        <InfoGrid>
          <IconWrapper>{icon}</IconWrapper>
          <Title>{title}</Title>
          <City>{city}</City>
        </InfoGrid>
      }
      bottomContent={
        <StatsContainer>
          <StatItem>
            <BulletIcon fill="#C480FF" size={12} />
            {rack} رک
          </StatItem>
          <StatItem>
            <BulletIcon fill="#F6B155" size={12} />
            {sensor} سنسور
          </StatItem>
        </StatsContainer>
      }
    />
  );
};

export default ServerRoomCard;
