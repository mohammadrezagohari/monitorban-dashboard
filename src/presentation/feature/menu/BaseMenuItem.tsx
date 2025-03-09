import { ListItemIcon, ListItemText } from "@mui/material";
import { StyledMenuItem } from "./BaseMenuItem.styles";
import { MenuItemProps } from "./IBaseMenuItem";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const BaseMenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  href,
  active,
  disabled,
}) => {
  return (
    <StyledMenuItem
      as={href ? RouterLink : "div"}
      {...(href ? { to: href } : {})}
      active={active}
      disabled={disabled}
    >
      <ListItemIcon sx={{ color: active ? "neutral.50" : "neutral.200", minWidth: 0 }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </StyledMenuItem>
  );
};

export default BaseMenuItem;
