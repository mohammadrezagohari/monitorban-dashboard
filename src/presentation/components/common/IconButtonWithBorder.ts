import { styled, IconButton as MuiIconButton } from "@mui/material";

export const IconButtonWithBorder = styled(MuiIconButton)<{ bgColor?: string; color?: string; type?: "outlined" | "contained"; }>(({ theme, type = "outlined", bgColor, color = theme.palette.primary.dark }) => ({
    border: type === "outlined" ? `1px solid ${color}` : "none",
    borderRadius: "10px",
    color: color,
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor || "transparent",
    // backgroundColor: bgColor || "red",
}))