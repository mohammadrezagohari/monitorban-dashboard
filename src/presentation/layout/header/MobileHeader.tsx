import { useState } from "react";
import { Box } from "@mui/material";

import { MobileMenu } from "./MobileMenu";
import { MobileNavbar } from "./MobileNavbar";
import { StyledMobileHeader } from "./Header.styles";

export function MobileHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((open) => !open);
  };

  return (
    <StyledMobileHeader>
      <MobileNavbar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MobileMenu
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </StyledMobileHeader>
  );
}
