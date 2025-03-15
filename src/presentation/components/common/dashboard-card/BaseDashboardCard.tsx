import { Box } from "@mui/material";
import React from "react";
import { IDashboardCardProps } from "./IDashboardCard";
import {
  CardContainer,
  City,
  Divider,
  IconWrapper,
  InfoGrid,
  StatItem,
  StatsContainer,
  Title,
} from "./BaseDashboardCard.style";

const BaseDashboardCard: React.FC<IDashboardCardProps> = ({
  title,
  icon,
  city,
  sensor = 0,
  rack = 0,
}) => {
  return (
    <CardContainer>
      <InfoGrid>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        <City>{city}</City>
      </InfoGrid>
      <Divider />
      <StatsContainer>
        <StatItem>
          <span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="#C480FF" />
            </svg>
          </span>
          {rack} رک
        </StatItem>
        <StatItem>
          <span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="#F6B155" />
            </svg>
          </span>
          {sensor} سنسور
        </StatItem>
      </StatsContainer>
    </CardContainer>
  );
};

export default BaseDashboardCard;
