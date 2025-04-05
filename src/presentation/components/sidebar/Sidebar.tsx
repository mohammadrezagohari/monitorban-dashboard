import BaseMenuItem from "src/presentation/feature/menu/BaseMenuItem";
import {
  Box,
  Drawer,
  List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
} from "@mui/material";
import { LogoIcon } from "src/presentation/components/common/icons/LogoIcon";
import { LogoText } from "src/presentation/components/common/icons/LogoText";
// import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { StyledDrawer, StyledSidebarContainer } from "./Sidebar.style";
import { SiderbarProps } from "./ISidebar";

const Sidebar: React.FC<SiderbarProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    console.log(index);
  };

  return (
    <StyledSidebarContainer>
      <Drawer variant="permanent" sx={StyledDrawer}>
        <div>
          <LogoIcon />
          <LogoText />
        </div>

        <Box
          sx={{
            bgcolor: "red",
            height: "113px",
            borderRadius: "15px",
            padding: "10px",
          }}
        >
          Profile
        </Box>

        <List>
          {items.map((item, index) => (
            <BaseMenuItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={selectedIndex === index}
              onClick={() => handleMenuItemClick(index)}
              href={item.href}
            />
            // <ListItem key={item.label} component={Link} to={item.href}>
            //   <ListItemIcon>{item.icon}</ListItemIcon>
            //   <ListItemText primary={item.label} />
            // </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <div>
        <List>
          <BaseMenuItem
            label="داشبورد"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 0}
            active={selectedIndex === 0}
            onClick={() => handleMenuItemClick(0)}
          />

          <BaseMenuItem
            label="سنسورها"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 1}
            active={selectedIndex === 1}
            onClick={() => handleMenuItemClick(1)}
          />

          <BaseMenuItem
            label="اتاق سرور"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 2}
            active={selectedIndex === 2}
            onClick={() => handleMenuItemClick(2)}
          />

          <BaseMenuItem
            label="گزارشات"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 3}
            active={selectedIndex === 3}
            onClick={() => handleMenuItemClick(3)}
          />

          <BaseMenuItem
            label="مدیریت کاربران"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 4}
            active={selectedIndex === 4}
            onClick={() => handleMenuItemClick(4)}
          />

          <BaseMenuItem
            label="آموزش ها"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 5}
            active={selectedIndex === 5}
            onClick={() => handleMenuItemClick(5)}
          />

          <BaseMenuItem
            label="پشتیبانی"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 6}
            active={selectedIndex === 6}
            onClick={() => handleMenuItemClick(6)}
          />

          <BaseMenuItem
            label="تنظیمات"
            icon={<DashboardIcon />}
            //   selected={selectedIndex === 7}
            active={selectedIndex === 7}
            onClick={() => handleMenuItemClick(7)}
          />

          <NavLink to="">تنظیمات</NavLink>
        </List>
      </div> */}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
