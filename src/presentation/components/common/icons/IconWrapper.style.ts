import { styled } from "@mui/material";
import { IconWrapperProps } from "./IIcons";

export const IconWrapper = styled('span')<IconWrapperProps>(({ theme, bgcolor = "#4D4259", size = 48 }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgcolor,
    padding: "12px",
    borderRadius: "50px",
    gridRow: "1/3",
    width: `${size}px`,
    height: `${size}px`,
    flexShrink: 0,
}))