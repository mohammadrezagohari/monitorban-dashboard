import { Box, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr)) auto",
    alignItems: "flex-end",
    gap: "1rem",
}))

export const StyledUsersContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-start",
    [theme.breakpoints.up("md")]: {
        gap: "2rem",
    },
    "& > div": {
        width: "100%",
    },
}))