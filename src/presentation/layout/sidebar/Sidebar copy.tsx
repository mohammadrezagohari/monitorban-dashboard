import BaseMenuItem from "src/presentation/components/menu/BaseMenuItem";
import { Box, Drawer, List, styled } from "@mui/material";
import { LogoIcon } from "src/presentation/assets/icons/LogoIcon";
import { LogoText } from "src/presentation/assets/icons/LogoText";
import {
  LogoContainer,
  StyledDrawer,
  StyledSidebarContainer,
} from "./Sidebar.style";
import { SiderbarProps } from "./ISidebar";
import { Link, NavLink } from "react-router-dom";
import UserAccountCard from "src/presentation/components/sidebar/user-account-card/UserAccountCard";

// const StyledNavLink = styled(NavLink)(({ theme }) => ({
//   padding: "16px",
//   display: "flex",
//   gap: "8px",
//   textDecoration: "none",
//   alignItems: "center",
//   textAlign: "right",
//   borderRadius: "15px",
//   backgroundColor: "transparent",
//   color: theme.palette.neutral[200],
//   transition: "color 0.3s ease",
//   "&.active": {
//     backgroundColor: theme.palette.neutral[600],
//     color: theme.palette.neutral[50],
//   },
// }));

const Sidebar: React.FC<SiderbarProps> = ({
  activedUser,
  items,
  pageIndex,
  setPageIndex,
}) => {
  const handleMenuItemClick = (index: number) => {
    setPageIndex(index);
    console.log(index);
  };

  return (
    <StyledSidebarContainer>
      <Drawer variant="permanent" sx={StyledDrawer}>
        <LogoContainer>
          <Link to="dashboard">
            <LogoIcon />
            <LogoText />
          </Link>
        </LogoContainer>

        <Box marginBottom={8}>
          <UserAccountCard user={activedUser} />
        </Box>

        {/* returned an ul tag */}
        <List>
          {items &&
            items.map((item, index) => (
              <BaseMenuItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                active={pageIndex === index}
                onClick={() => handleMenuItemClick(index)}
                href={item.href}
              />
            ))}
        </List>
      </Drawer>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
