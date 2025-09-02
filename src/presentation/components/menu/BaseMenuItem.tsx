import React from "react";
import { Typography } from "@mui/material";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import { StyledNavLink } from "./BaseMenuItem.styles";
import { MenuItemProps } from "./IBaseMenuItem";

const BaseMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { label, icon, path } = item;

  const ItemIcon = iconsMap[icon as keyof typeof iconsMap];

  return (
    <li>
      <StyledNavLink to={path || ""}>
        <ItemIcon />
        <Typography fontSize={16} fontWeight={700}>
          {label}
        </Typography>
      </StyledNavLink>
    </li>
  );
};

export default BaseMenuItem;
