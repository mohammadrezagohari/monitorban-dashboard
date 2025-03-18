import { Breadcrumbs, styled } from "@mui/material";

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    "& a": {
        textDecoration: 'none',
        color: theme.palette.neutral[200], //TODO:: should be debugged error
        "&:hover": {
            color: theme.palette.neutral[50],
        },
    },
    "& .MuiTypography-root": {
        color: theme.palette.neutral[200]
    },
    "& .MuiBreadcrumbs-separator": {
        color: "#B7B0BF",
        fontWeight: 500
    }
}))