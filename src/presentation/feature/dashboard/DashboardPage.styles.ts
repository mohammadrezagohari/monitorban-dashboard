import { Box, styled } from "@mui/material";

export const StyledDashboardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(4),
    }
}))