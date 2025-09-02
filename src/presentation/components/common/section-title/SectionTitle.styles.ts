import { Typography, styled } from "@mui/material";

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h3.fontSize,
    color: theme.palette.neutral.main,
}));


// fontSize: { md: 24, xs: 18 },