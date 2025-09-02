import Logo from "src/presentation/components/common/logo/Logo";
import MainNav from "src/presentation/components/main-nav/MainNav";
import UserAccountCard from "./user-account-card/UserAccountCard";
import { StyledSidebar } from "./Sidebar.style";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <UserAccountCard />

      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
