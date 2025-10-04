import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { CardContainerProps, IColors, TextProps } from "./IDashboardCard";

export const CardContainer = styled(Box)<CardContainerProps>(({ theme, width }) => ({
    backgroundColor: theme.palette.neutral[600],
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: theme.spacing(1.5),
    width: width,
    border: `1px solid transparent`,
    "&:hover": {
        borderColor: theme.palette.neutral[300]
    },
    [theme.breakpoints.up("md")]: {
        borderRadius: "15px",
        padding: theme.spacing(2),
    }
}))

export const StatsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const DataContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))


export const Title = styled(Typography)<TypographyProps>(({ theme, color }) => ({
    color: color,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.body1.fontSize
    }
}))

export const Text = styled(Typography)<TypographyProps>(({ theme, color }) => ({
    color: color,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}))

export const TitleContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    // whiteSpace: "nowrap",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
}))

export const TextSpan = styled(Typography)<TextProps>(({ color }) => ({
    color: color,
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}))

export const TextBox = styled("span")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5)
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