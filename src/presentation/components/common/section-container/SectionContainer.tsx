import React from "react";

import { ISectionContainerProps } from "./ISectionContainer";
import { StyledSectionContainer } from "./SectionContainer.styles";

const SectionContainer: React.FC<ISectionContainerProps> = ({
  children,
  width,
  height,
  ...props
}) => {
  return (
    <StyledSectionContainer width={width} height={height} {...props}>
      {children}
    </StyledSectionContainer>
  );
};

export default SectionContainer;
