import React from "react";
import { RowProps } from "./IRow";
import { StyledRow } from "./Row.styles";

function Row({ children, type }: RowProps) {
  return <StyledRow type={type}>{children}</StyledRow>;
}

export default Row;
