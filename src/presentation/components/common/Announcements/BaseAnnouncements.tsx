import React from "react";
import { Typography } from "@mui/material";

import { IBaseAnnouncements } from "./IBaseAnnouncements";
import {
  StyledContainer,
  StyledContextContainer,
  StyledImgContainer,
} from "./BaseAnnouncements.style";

const BaseAnnouncements: React.FC<IBaseAnnouncements> = ({
  title,
  description,
  icon,
}) => {
  return (
    <StyledContainer>
      <StyledImgContainer>{icon}</StyledImgContainer>
      <StyledContextContainer>
        <Typography variant="body1" sx={{ color: "neutral.100" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "neutral.200" }}>
          {description}
        </Typography>
      </StyledContextContainer>
    </StyledContainer>
  );
};

export default BaseAnnouncements;
