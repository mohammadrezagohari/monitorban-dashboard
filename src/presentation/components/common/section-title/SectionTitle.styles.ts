import { Typography, styled } from "@mui/material";

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.neutral.main,
    fontWeight: theme.typography.h6.fontWeight,
    lineHeight: 1.6,
    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h3.fontSize,
    }
}));
