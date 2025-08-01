import { Box, styled } from "@mui/material";

export const StyledReportsForm = styled("form")(({ theme }) => ({
    display: "flex",
    alignItems: "flex-end",
    gap: theme.spacing(3),
}))

export const InputsContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: theme.spacing(2),
    width: "100%",
}))