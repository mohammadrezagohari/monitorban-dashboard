import { Box, styled } from "@mui/material";

export const StyledUserCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "10px",
    padding: theme.spacing(1.5),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    [theme.breakpoints.up("md")]: {
        borderRadius: "25px",
    }
}));
