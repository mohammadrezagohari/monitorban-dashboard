import { styled, Card as MuiCard } from "@mui/material";

export const Card = styled(MuiCard)(({ theme }) => ({
    maxWidth: 319,
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
        maxWidth: 260,
    }
})) 