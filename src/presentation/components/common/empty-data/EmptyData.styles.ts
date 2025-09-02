import { Box, styled } from "@mui/material";

export const StyledEmptyData = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
}))