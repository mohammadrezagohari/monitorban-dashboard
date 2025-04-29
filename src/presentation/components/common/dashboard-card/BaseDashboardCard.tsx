import React from "react";
import { IDashboardCardProps } from "./IDashboardCard";
import { CardContainer, Divider } from "./BaseDashboardCard.style";

const BaseDashboardCard: React.FC<IDashboardCardProps> = ({
  topContent,
  bottomContent,
  divider = true,
  width,
}) => {
  return (
    <CardContainer maxWidth={width} width="100%">
      {topContent}
      {divider && <Divider />}
      {bottomContent}
    </CardContainer>
  );
};

export default BaseDashboardCard;
