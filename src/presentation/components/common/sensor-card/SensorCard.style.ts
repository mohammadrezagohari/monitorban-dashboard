import { Box, styled } from "@mui/material";

export const StyledSensorCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "10px",
    padding: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
        // maxWidth: "200px",
        borderRadius: "25px",
    },
    [theme.breakpoints.up("lg")]: {
        maxWidth: "250px",
    },
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    border: "1px solid transparent",
    "&:hover": { borderColor: theme.palette.neutral[300] }
}))