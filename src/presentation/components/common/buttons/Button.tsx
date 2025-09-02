import { Button as MuiButton, SxProps, Theme } from "@mui/material";
import React from "react";
import { ButtonProps } from "./IButton";
import { buttonSizes, colors } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "medium",
  colorType = "primary",
  children,
  ...props
}) => {
  const baseStyle: SxProps<Theme> = {
    ...buttonSizes[size],
    display: "flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    gap: 1,
    border: "1px solid none",
    color: colors?.[variant][colorType].text,
    bgcolor:
      variant === "contained" ? colors?.[variant][colorType].bg : "transparent",
    borderColor:
      variant === "outlined" ? colors?.[variant][colorType].border : "none",
    "&:hover": {
      bgcolor: colors?.[variant][colorType].hover.bg,
      color: colors?.[variant][colorType].hover.text,
      borderColor: colors?.[variant][colorType].hover.border,
    },
    span: { m: 0 },
    textTransform: "none",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  return (
    <MuiButton variant={variant} sx={baseStyle} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
