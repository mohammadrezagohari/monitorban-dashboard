import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

import { StyledPageTitle } from "./PageTitle.styles";

export default function PageTitle({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) {
  return (
    <StyledPageTitle>
      <Typography variant="h2" color="neutral.main">
        {title}
      </Typography>
      {children}
    </StyledPageTitle>
  );
}
