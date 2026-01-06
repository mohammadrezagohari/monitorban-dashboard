import { Outlet } from "react-router-dom";

import useScreenSize from "@/presentation/hooks/useScreenSize";
import Main from "../../components/main/Main";
import Header from "../header/Header";
import { MobileHeader } from "../header/MobileHeader";
import Sidebar from "../sidebar/Sidebar";
import { StyledAppLayout } from "./AppLayout.style";

function AppLayout() {
  const { isMediumScreen } = useScreenSize();

  return (
    <StyledAppLayout>
      {isMediumScreen ? <Sidebar /> : <MobileHeader />}
      <Header />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
