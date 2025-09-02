import { Box, styled } from "@mui/material";

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    justifySelf: "flex-end",
    [theme.breakpoints.up("lg")]: {
        gridColumn: " 1/ -1",
    }
}))