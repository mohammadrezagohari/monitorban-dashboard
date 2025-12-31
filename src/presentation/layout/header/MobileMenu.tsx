import { Icon } from "src/presentation/components/common/icons/components/Icon";
import { Drawer, IconButton, useTheme } from "@mui/material";

import MainNav from "src/presentation/components/main-nav/MainNav";

export function MobileMenu(props: {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const { mobileOpen, handleDrawerToggle } = props;

  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
          height: "auto",
          borderRadius: "15px 0 0 15px",
          bgcolor: theme.palette.neutral[700],
        },
      }}
    >
      <IconButton
        component="button"
        onClick={handleDrawerToggle}
        sx={{
          m: "1rem 1rem 0",
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: theme.palette.neutral[600],
          color: theme.palette.neutral[50],
        }}
      >
        <Icon name="close" w={20} h={20} />
      </IconButton>

      <MainNav />
    </Drawer>
  );
}
