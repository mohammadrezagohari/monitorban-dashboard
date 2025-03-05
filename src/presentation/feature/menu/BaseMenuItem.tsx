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
  // const Component = href ? RouterLink : "div";
  return (
    <StyledMenuItem
      as={href ? RouterLink : "div"}
      {...(href ? { to: href } : {})}
      //   to={href ?? "#"}
      active={active}
      disabled={disabled}
    >
      <ListItemIcon sx={{ color: active ? "#F7F5FA" : "#B7B0BF", minWidth: 0 }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </StyledMenuItem>
  );
};

export default BaseMenuItem;
