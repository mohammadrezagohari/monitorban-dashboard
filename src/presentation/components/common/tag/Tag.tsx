import { TagProps } from "./ITag";
import { StyledTag } from "./Tag.styles";

function Tag({ children, type }: TagProps) {
  return <StyledTag variant="body2" $type={type}>{children}</StyledTag>;
}

export default Tag;
