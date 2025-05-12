import { Box, styled } from "@mui/material";

export const StyledSensorCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#373040",
    borderRadius: "25px",
    padding: "12px",
    [theme.breakpoints.up("md")]: {
        maxWidth: "250px",
    },
    // maxWidth: "250px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    border: "1px solid transparent",
    "&:hover": { borderColor: "#9B92A6" }
}))