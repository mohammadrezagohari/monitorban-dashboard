import React from "react";

import Divider from "../divider/Divider";
import { CardContainer } from "./BaseDashboardCard.style";
import { IDashboardCardProps } from "./IDashboardCard";

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
