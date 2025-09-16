import { AvatarProps } from "./IAvatar";
import { StyledAvatar } from "./Avatar.styles";

function Avatar({ children, src, size = 48 }: AvatarProps) {
  return (
    <StyledAvatar src={src} size={size}>
      {children}
    </StyledAvatar>
  );
}

export default Avatar;
