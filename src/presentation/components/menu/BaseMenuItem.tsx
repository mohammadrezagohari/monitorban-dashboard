import React from "react";
import { Typography } from "@mui/material";

import { StyledNavLink } from "./BaseMenuItem.styles";
import { MenuItemProps } from "./IBaseMenuItem";
import { Icon } from "../common/icons/components/Icon";

const BaseMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { label, icon, path } = item;

  return (
    <li>
      <StyledNavLink to={path || ""}>
        <Icon name={icon} className="icon" />
        <Typography fontSize={16} fontWeight={700}>
          {label}
        </Typography>
      </StyledNavLink>
    </li>
  );
};

export default BaseMenuItem;
