import React from "react";
import { IDashboardCardProps } from "./IDashboardCard";
import { CardContainer } from "./BaseDashboardCard.style";
import CustomDivider from "../divider/CustomDivider";

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
      {divider && <CustomDivider />}
      {bottomContent}
    </CardContainer>
  );
};

export default BaseDashboardCard;
