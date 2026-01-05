import { Button as MuiButton, SxProps, Theme } from "@mui/material";
import React from "react";
import { ButtonProps } from "./IButton";
import { buttonSizes, colors } from "./Button.styles";
import { Icon } from "../icons/components/Icon";

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "medium",
  colorType = "primary",
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseStyle: SxProps<Theme> = {
    ...buttonSizes[size],
    display: "flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    gap: 1,
    border: "1px solid",
    color: colors?.[variant][colorType].text,
    bgcolor:
      variant === "contained" ? colors?.[variant][colorType].bg : "transparent",
    borderColor: colors?.[variant][colorType].border,
    "&:hover": {
      bgcolor: colors?.[variant][colorType].hover.bg,
      color: colors?.[variant][colorType].hover.text,
      borderColor: colors?.[variant][colorType].hover.border,
    },
    "&:disabled": {
      color: colors[variant].disabled.text,
      bgcolor: colors[variant].disabled.bg,
      borderColor: colors[variant].disabled.border,
    },
    span: { m: 0 },
    textTransform: "none",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  const iconSize = {
    large: 24,
    medium: 20,
    small: 20,
    xsmall: 16,
    xxsmall: 16,
  };

  return (
    <MuiButton variant={variant} sx={baseStyle} {...props}>
      {rightIcon && (
        <Icon name={rightIcon} w={iconSize[size]} h={iconSize[size]} />
      )}
      <span>{children}</span>
      {leftIcon && (
        <Icon name={leftIcon} w={iconSize[size]} h={iconSize[size]} />
      )}
    </MuiButton>
  );
};

export default Button;
