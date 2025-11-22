import { styled, IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from "@mui/material";
type IconButtonProps = {
    bgColor?: string;
    iconColor?: MuiIconButtonProps["color"] | string;
    iconType?: "outlined" | "contained";
}

// { bgColor?: string; color?: string; type?: "outlined" | "contained"; }

export const IconButtonWithBorder = styled(MuiIconButton)<IconButtonProps>(({ theme, iconType = "outlined", bgColor, iconColor = theme.palette.primary.dark }) => ({
    border: iconType === "outlined" ? `1px solid ${iconColor}` : "none",
    borderRadius: "10px",
    color: iconColor,
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor || "transparent",
    // backgroundColor: bgColor || "red",
}))