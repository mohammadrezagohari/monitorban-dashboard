import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import {
  IconButton,
  StyledUserManagementItem,
} from "./UserManagementItem.styles";

function UserManagementItem({
  icon,
  title,
  color,
}: {
  icon?: ReactElement;
  title?: string;
  color?: string;
}) {
  return (
    <StyledUserManagementItem>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconWrapper bgcolor={color}>{icon}</IconWrapper>
        <Typography
          // component="h4"
          variant="h4"
          color="neutral.main"
          sx={{
            typography: { xs: "body2", md: "h4" },
            // typography: "h1",
          }}
        >
          {title}
        </Typography>
      </Box>
      <IconButton sx={{ p: "7px" }}>
        <ArrowLeftIcon size={16} />
      </IconButton>
    </StyledUserManagementItem>
  );
}

export default UserManagementItem;
