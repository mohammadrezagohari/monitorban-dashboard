import { SectionTitleProps } from "./ISectionTitle";
import { StyledSectionTitle } from "./SectionTitle.styles";

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

export default SectionTitle;
