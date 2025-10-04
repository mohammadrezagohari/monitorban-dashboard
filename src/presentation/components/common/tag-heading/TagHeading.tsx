import { StyledTagHeading } from "./TagHeading.styles";

function TagHeading({ children }: { children: React.ReactNode }) {
  return <StyledTagHeading variant="body2">{children}</StyledTagHeading>;
}

export default TagHeading;
