import { Link } from "react-router-dom";

import { Box, useTheme } from "@mui/material";
import { Icon } from "../icons/components/Icon";
import { LogoContainer } from "./Logo.style";

function Logo() {
  const theme = useTheme();

  return (
    <LogoContainer>
      <Link to="dashboard">
        <Box className="logo-box">
          {/* @ts-ignore */}
          <Icon name="logoShape" color={theme.palette.primary[300]} />
          <Icon name="logoText" color={theme.palette.text.primary} />
        </Box>
      </Link>
    </LogoContainer>
  );
}

export default Logo;
