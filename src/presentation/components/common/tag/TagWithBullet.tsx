import { useTheme } from "@mui/material";
import { ReactNode } from "react";

import { BulletIcon } from "src/presentation/assets/icons/BulletIcon";
import { StyledTagWithBullet } from "./Tag.styles";

function TagWithBullet({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <StyledTagWithBullet variant="body1">
      <BulletIcon color={theme.palette.primary.dark} size={8} />

      {children}
    </StyledTagWithBullet>
  );
}

export default TagWithBullet;
