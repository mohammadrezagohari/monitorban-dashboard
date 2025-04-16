import BaseMenuItem from "src/presentation/feature/menu/BaseMenuItem";
import {
  Box,
  Drawer,
  List,
} from "@mui/material";
import { LogoIcon } from "src/presentation/components/common/icons/LogoIcon";
import { LogoText } from "src/presentation/components/common/icons/LogoText";
import { useState } from "react";
import {
  LogoContainer,
  ProfileContainer,
  StyledDrawer,
  StyledSidebarContainer,
} from "./Sidebar.style";
import { SiderbarProps } from "./ISidebar";
import { Link } from "react-router-dom";
import UserAccountCard from "src/presentation/feature/user-account-card/UserAccountCard";
import { usersInfo } from "src/presentation/feature/test/data";

const Sidebar: React.FC<SiderbarProps> = ({
  items,
  pageIndex,
  setPageIndex,
}) => {

  const handleMenuItemClick = (
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
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
          <UserAccountCard user={usersInfo[0]} />
        </Box>
        {/* <ProfileContainer> 
          TODO:: should be added dashboard card
           Profile
        </ProfileContainer> */}

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
