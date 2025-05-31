import {
  HeaderContainer,
  MainContainer,
  StyledSectionContainer,
} from "./SectionContainer.style";
import React from "react";
import { ISectionContainerProps } from "./ISectionContainer";

const SectionContainer: React.FC<ISectionContainerProps> = ({
  // header,
  //  main,
  children,
  width,
  height,
  sx,
}) => {
  return (
    <StyledSectionContainer
      // sx={{ width: `${width}`, height: `${height}` }}
      width={width}
      height={height}
      sx={sx}
    >
      {/* <HeaderContainer>{header}</HeaderContainer>
      <MainContainer>{main}</MainContainer> */}
      {children}
    </StyledSectionContainer>
  );
};

export default SectionContainer;
