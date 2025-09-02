import { Outlet } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

import Main from "../../components/main/Main";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { MobileHeader } from "../header/MobileHeader";
import { StyledAppLayout } from "./AppLayout.style";

function AppLayout() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledAppLayout>
      {isDesktop ? <Sidebar /> : <MobileHeader />}
      <Header />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
