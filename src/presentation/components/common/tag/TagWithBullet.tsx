import { useTheme } from "@mui/material";
import { ReactNode } from "react";

import { Icon } from "../icons/components/Icon";
import { StyledTagWithBullet } from "./Tag.styles";

function TagWithBullet({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <StyledTagWithBullet variant="body1">
      <Icon name="bullet" color={theme.palette.primary.dark} w={8} h={8} />

      {children}
    </StyledTagWithBullet>
  );
}

export default TagWithBullet;
