import { Button } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import React from "react";
import { IButton } from "./Ibutton";

const sizes = {
  lg: {
    width: "187px",
    height: "48px",
  },
  md: {
    width: "178px",
    height: "40px",
  },
  sm: {
    width: "178px",
    height: "36px",
  },
  xs: {
    width: "160px",
    height: "34px",
  },
  xxs: {
    width: "127px",
    height: "32px",
  },
};

export const ButtonComp: React.FC<IButton> = ({
  children,
  color = "primary",
  size = "md",
  variant = "contained",
  disabled = false,
  onClick,
}) => {
  const { width, height } = sizes[size];

  const theme = useTheme();

  const palette = theme.palette as Record<string, any>;
  const paletteColor: string = Object.hasOwn(theme.palette, color)
    ? (color as keyof Theme["palette"])
    : "primary";

  if (paletteColor === null || paletteColor === undefined)
    throw new Error("Unknown paletteColor!");
  console.log(palette);
  console.log(paletteColor);

  const colors = {
    contained: {
      // primary: {
      //   textColor: "#F7F5FA",
      //   backgroundColor: palette[paletteColor]?.[500],
      //   borderColor: "none",
      //   textHoverColor: "#F7F5FA",
      //   backgroundHoverColor: palette[paletteColor]?.[700],
      //   borderHoverColor: "none",
      // },
      secondary: {
        textColor: "#F7F5FA",
        backgroundColor:
          palette[paletteColor]?.[500] ?? palette["primary"]?.[500],
        borderColor: "none",
        textHoverColor: "#F7F5FA",
        backgroundHoverColor:
          palette[paletteColor]?.[600] ?? palette["primary"]?.[700],
        borderHoverColor: "none",
      },
      error: {
        textColor: "#F7F5FA",
        backgroundColor:
          palette[paletteColor]?.[400] ?? palette["primary"]?.[500],
        borderColor: "none",
        textHoverColor: "#F7F5FA",
        backgroundHoverColor:
          palette[paletteColor]?.[600] ?? palette["primary"]?.[700],
        borderHoverColor: "none",
      },
      success: {
        textColor: "#F7F5FA",
        backgroundColor:
          palette[paletteColor]?.[400] ?? palette["primary"]?.[500],
        borderColor: "none",
        textHoverColor: "#F7F5FA",
        backgroundHoverColor:
          palette[paletteColor]?.[600] ?? palette["primary"]?.[700],
        borderHoverColor: "none",
      },
    },
    outlined: {
      // primary: {
      //   textColor: "#7F6A95",
      //   backgroundColor: "none",
      //   borderColor: "#7F6A95",
      //   textHoverColor: palette["primary"]?.[100],
      //   backgroundHoverColor: "none",
      //   borderHoverColor: palette["primary"]?.[100],
      // },
      secondary: {
        textColor: palette[paletteColor]?.[200] ?? "#7F6A95",
        backgroundColor: "none",
        borderColor: palette[paletteColor]?.[500] ?? "#7F6A95",
        textHoverColor:
          palette[paletteColor]?.[200] ?? palette["primary"]?.[100],
        backgroundHoverColor: palette[paletteColor]?.[800] ?? "#333",
        borderHoverColor:
          palette[paletteColor]?.[500] ?? palette["primary"]?.[100],
      },
      error: {
        textColor: palette[paletteColor]?.[400] ?? "#7F6A95",
        backgroundColor: "none",
        borderColor: palette[paletteColor]?.[400] ?? "#7F6A95",
        textHoverColor:
          palette[paletteColor]?.[400] ?? palette["primary"]?.[100],
        backgroundHoverColor: palette[paletteColor]?.[800] ?? "#333",
        borderHoverColor:
          palette[paletteColor]?.[400] ?? palette["primary"]?.[100],
      },
      success: {
        textColor: palette[paletteColor]?.[400] ?? "#7F6A95",
        backgroundColor: "none",
        borderColor: palette[paletteColor]?.[400] ?? "#7F6A95",
        textHoverColor:
          palette[paletteColor]?.[400] ?? palette["primary"]?.[100],
        backgroundHoverColor: palette[paletteColor]?.[800] ?? "#333",
        borderHoverColor:
          palette[paletteColor]?.[400] ?? palette["primary"]?.[100],
      },
    },
    text: {
      // primary: {
      //   textColor: palette["primary"]?.[200],
      //   backgroundColor: "none",
      //   borderColor: "none",
      //   textHoverColor: palette["primary"]?.[100],
      //   backgroundHoverColor: "none",
      //   borderHoverColor: "none",
      // },
      secondary: {
        textColor: palette[paletteColor]?.[200] ?? palette["primary"]?.[200],
        backgroundColor: "none",
        borderColor: "none",
        textHoverColor:
          palette[paletteColor]?.[50] ?? palette["primary"]?.[100],
        backgroundHoverColor: "none",
        borderHoverColor: "none",
      },
      error: {
        textColor: palette[paletteColor]?.[400] ?? palette["primary"]?.[200],
        backgroundColor: "none",
        borderColor: "none",
        textHoverColor:
          palette[paletteColor]?.[200] ?? palette["primary"]?.[100],
        backgroundHoverColor: "none",
        borderHoverColor: "none",
      },
      success: {
        textColor: palette[paletteColor]?.[400] ?? palette["primary"]?.[200],
        backgroundColor: "none",
        borderColor: "none",
        textHoverColor:
          palette[paletteColor]?.[200] ?? palette["primary"]?.[100],
        backgroundHoverColor: "none",
        borderHoverColor: "none",
      },
    },
  };

  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: "10px",
        width: width,
        height: height,
        color: colors[variant]?.[color]?.["textColor"],
        backgroundColor: colors[variant]?.[color]?.["backgroundColor"],
        borderColor: colors[variant]?.[color]?.["borderColor"],
        "&:hover": {
          color: colors[variant][color]["textHoverColor"],
          background: colors[variant][color]["backgroundHoverColor"],
          borderColor: colors[variant][color]["borderHoverColor"],
        },
        "&:disabled": {
          color:
            colors[variant]?.[color]?.["textColor"] !== "#F7F5FA"
              ? "#5B5266"
              : "#F7F5FA",
          backgroundColor:
            colors[variant]?.[color]?.["backgroundColor"] !== "none"
              ? "#5B5266"
              : null,
          borderColor:
            colors[variant]?.[color]?.["borderColor"] !== "none"
              ? "#5B5266"
              : null,
        },
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
