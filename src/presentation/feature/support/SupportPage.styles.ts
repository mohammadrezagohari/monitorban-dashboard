import { Box, styled } from "@mui/material";

export const StyledSupportPage = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(3),
    },
}))