import { Box, styled } from "@mui/material";

export const StyledCreateGroup = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
        gap: theme.spacing(4),
    },
}))