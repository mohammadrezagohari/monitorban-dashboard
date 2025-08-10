import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { StyledLinearCard } from "./LinearCard.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

function LinearCard({
  icon,
  children,
  color,
  handleClick,
}: {
  icon?: ReactElement;
  children?: string;
  color?: string;
  handleClick?: () => void;
}) {
  return (
    <StyledLinearCard>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconWrapper bgcolor={color}>{icon}</IconWrapper>
        <Typography
          variant="h4"
          color="neutral.main"
          sx={{
            typography: { xs: "body2", md: "h4" },
          }}
        >
          {children}
        </Typography>
      </Box>
      <IconButtonWithBorder onClick={handleClick}>
        <ArrowLeftIcon size={16} />
      </IconButtonWithBorder>
    </StyledLinearCard>
  );
}

export default LinearCard;
