import { Box, Paper, styled, Typography } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
    color: theme.palette.neutral.main,
    width: 263,
    border: `1px solid ${theme.palette.neutral[300]}`,
    [theme.breakpoints.up("md")]: {
        width: 285,
    }
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(3),
}))

export const FilterTitle = styled(Typography)(({ theme }) => ({
    component: "h5",
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    [theme.breakpoints.up("md")]: {
        fontWeight: theme.typography.h3.fontWeight,
    }
}))