import { Box, styled } from "@mui/material";

export const TutorialList = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    justifyItems: "center",
    gap: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
    },
}));

export const EmptyList = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
}))