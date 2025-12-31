import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { useMoveBack } from "src/presentation/hooks/useMoveBack";

import Avatar from "src/presentation/components/common/avatar/Avatar";
import { usersInfo } from "src/presentation/data/data";
import { Icon } from "src/presentation/components/common/icons/components/Icon";

export function MobileNavbar(props: {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const {
    mobileOpen,
    handleDrawerToggle,
  }: { mobileOpen: boolean; handleDrawerToggle: () => void } = props;
  const theme = useTheme();
  const moveBack = useMoveBack();

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: !mobileOpen
          ? theme.palette.neutral[700]
          : theme.palette.neutral[800],
      }}
    >
      <Toolbar
        sx={{
          p: 2,
          bgcolor: theme.palette.neutral[700],
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            sx={{
              bgcolor: theme.palette.neutral[600],
              ml: 1,
              color: theme.palette.neutral[50],
            }}
            onClick={moveBack}
          >
            <Icon name="arrowRight" />
          </IconButton>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              bgcolor: theme.palette.neutral[600],
              width: 40,
              color: theme.palette.neutral[50],
              height: 40,
            }}
          >
            {/* <MenuIcon /> */}
            <Icon name="burgerMenu" w={20} h={20} />
          </IconButton>
        </Box>
        <Link to="dashboard" style={{ marginLeft: 48 }}>
          {/* <LogoIcon /> */}
          <Icon name="logoShape" />
        </Link>
        <Avatar src={usersInfo[0].image || ""} size={40}>
          <Icon name="user" />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
