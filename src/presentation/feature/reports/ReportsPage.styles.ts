import { Box, styled } from "@mui/material";

export const StyledReportsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
}));
