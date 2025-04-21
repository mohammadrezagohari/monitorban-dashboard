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
    <CardContainer width={width}>
      {topContent}
      {divider && <Divider />}
      {bottomContent}
    </CardContainer>
  );
};

export default BaseDashboardCard;
