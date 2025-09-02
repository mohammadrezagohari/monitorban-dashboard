import { Box, styled } from "@mui/material";

export const StyledAddAccessContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
}))