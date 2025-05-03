import React from "react";
import { IDashboardCardProps } from "./IDashboardCard";
import { CardContainer, Divider } from "./BaseDashboardCard.style";

const BaseDashboardCard: React.FC<IDashboardCardProps> = ({
  topContent,
  bottomContent,
  divider = true,
  width,
  onHandleClick,
}) => {
  return (
    <CardContainer maxWidth={width} width="100%" onClick={onHandleClick}>
      {topContent}
      {divider && <Divider />}
      {bottomContent}
    </CardContainer>
  );
};

export default BaseDashboardCard;
