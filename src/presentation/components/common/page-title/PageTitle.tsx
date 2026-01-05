import { Typography } from "@mui/material";
import React from "react";

import { StyledPageTitle } from "./PageTitle.styles";
import { PageTitleProps } from "./IPageTitle";

export default function PageTitle({ children, title, className }: PageTitleProps) {
  return (
    <StyledPageTitle className={className}>
      <Typography variant="h2" color="neutral.main">
        {title}
      </Typography>
      {children}
    </StyledPageTitle>
  );
}
