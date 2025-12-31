import { styled } from "@mui/material";
import { IconWrapperProps } from "./types";

export const IconWrapper = styled('span')<IconWrapperProps>(({
    theme,
    color,
    bgcolor,
    size = 48
}) => ({
    display: "flex",
    alignItems: "center",
    color: color,
    justifyContent: "center",
    backgroundColor: bgcolor || theme.palette.neutral[500],
    padding: theme.spacing(1),
    borderRadius: "50px",
    gridRow: "1/3",
    width: 32,
    height: 32,
    flexShrink: 0,
    [theme.breakpoints.up("md")]: {
        width: `${size}px`,
        height: `${size}px`,
        padding: theme.spacing(1.5),
    }
}))