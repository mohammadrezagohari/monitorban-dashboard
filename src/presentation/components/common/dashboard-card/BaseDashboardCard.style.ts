import { Box, styled, Typography } from "@mui/material";
import { CardContainerProps, IColors, IconWrapperProps, TextProps } from "./IDashboardCard";

export const CardContainer = styled(Box)<CardContainerProps>(({ theme, width }) => ({
    backgroundColor: theme.palette.neutral[600],
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    borderRadius: "16px",
    padding: "16px",
    width: width,
    border: `1px solid transparent`,
    "&:hover": {
        borderColor: theme.palette.neutral[300]
    }
}))

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

export const Divider = styled("hr")(({ theme }) => ({
    border: `1px solid ${theme.palette.text.disabled}`
}))

export const StatsContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
}))

export const DataContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))

export const Text = styled(Typography)<TextProps>(({ theme, color, variant }) => ({
    color: color,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}))

export const TextSpan = styled(Typography)<TextProps>(({ color }) => ({
    color: color,
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}))

export const TextBox = styled("span")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "4px"
}))


export const getStatusColors = (status: "accept" | "warning" | "danger" | "default" = "default") => {
    const colors: IColors = {
        accept: {
            icon: "#0B9D4E", // "success.500",
            text: "#0FD36A", //"success.main",
        },
        warning: {
            icon: "#F6C000", // "waning.500",
            text: "#F6C000", // "waning.500",
        },
        danger: {
            icon: "#D02224", // "error.500",
            text: "#E8383B", // "error.main",
        },
        default: {
            icon: "#F7F5FA26",
            text: "#8C32D9" // "primary.main",
        },
    }
    return colors[status]
}