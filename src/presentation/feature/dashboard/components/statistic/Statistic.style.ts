import { Box, styled, Typography } from "@mui/material";
import { TextProps } from "../../../../components/common/dashboard-card/IDashboardCard";

export const StyledStatisticContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(2)
    }
}))


export const StatisticValue = styled(Typography)<TextProps>(({ theme }) => ({
    fontSize: 30,
    fontWeight: 800,
    color: theme.palette.primary[300],
    lineHeight: 1.6,
    [theme.breakpoints.up("md")]: {
        fontSize: 48,
        fontWeight: 900,
        marginTop: "auto",
    },
}));

export const StyledDetailsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.25),
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(0.5),
    }
}));

export const StyledStatisticItem = styled(Box)(({ theme }) => ({
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[700],
    width: "100%",
    height: "100%",
    overflow: "hidden",
    padding: theme.spacing(1.5, 1),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
        borderRadius: "25px",
    }
}))