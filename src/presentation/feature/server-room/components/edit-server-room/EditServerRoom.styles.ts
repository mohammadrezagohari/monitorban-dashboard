import { Box, styled } from "@mui/material";

export const ButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(2),
    }
}))