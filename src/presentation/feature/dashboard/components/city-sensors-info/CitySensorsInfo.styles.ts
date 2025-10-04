import { Box, styled } from "@mui/material";

export const StyledCitySensorsInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(2),
    }
}))