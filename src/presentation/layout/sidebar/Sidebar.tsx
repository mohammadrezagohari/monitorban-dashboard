import Logo from "@/presentation/components/common/logo/Logo";
import MainNav from "@/presentation/components/main-nav/MainNav";
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
