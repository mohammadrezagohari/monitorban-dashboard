import { Button } from "@mui/material";
import { IButton } from "./IButtonCustom";
import React from "react";

export const ButtonCustom: React.FC<IButton> = ({
  children,
  disabled,
  textColor,
  textHoverColor,
  bgColor,
  bgHoverColor,
  borderColor,
  borderHoverColor = "none",
  size,
  leftIcon = null,
  rightIcon = null,
  iconSize,
  padding,
  variant,
  fontSize,
  type,
  onClick,
}) => {
  // console.log(typeof bgHoverColor);
  // console.log(disabled);
  // console.log(bgColor);

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "10px",
    padding: padding,
    fontSize: fontSize,
    fontWeight: "500",
    height: size,
    color: textColor,
    "& svg": {
      stroke: "currentColor",
    },
    backgroundColor: bgColor,
    borderColor: borderColor ? borderColor : { border: "none" },
    "&:hover": {
      ...(!disabled && {
        color: textHoverColor,

        backgroundColor: bgHoverColor ? bgHoverColor : { background: "none" },

        borderColor: borderHoverColor ? borderHoverColor : { border: "none" },
      }),
    },
    "&:disabled": {
      color: textColor,
      backgroundColor: bgColor,
      borderColor: borderColor ? borderColor : { border: "none" },
    },
  };

  return (
    <Button
    //   type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      sx={buttonStyles}
    >
      {rightIcon &&
        React.cloneElement(rightIcon, {
          color: textColor,
          size: iconSize,
        })}
      {children}
      {leftIcon &&
        React.cloneElement(leftIcon, {
          color: textColor,
          size: iconSize,
        })}
    </Button>
  );
};
