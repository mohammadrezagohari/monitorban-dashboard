import { Box, Breadcrumbs, styled } from "@mui/material";

export const StyledHeader = styled("header")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const StyledMobileHeader = styled("header")(({ theme }) => ({
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("md")]: { gap: theme.spacing(3) },
}))

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    "& a": {
        textDecoration: 'none',
        color: theme.palette.neutral[200],
        "&:hover": {
            color: theme.palette.neutral[50],
            textDecoration: 'none',
        },
        fontSize: 14,
        fontWeight: 500,
    },
    "& p": {
        color: theme.palette.neutral[200],
        fontSize: 14,
        fontWeight: 500,
    },
    "& .MuiTypography-root": {
        color: theme.palette.neutral[200]
    },
    "& .MuiBreadcrumbs-separator": {
        color: "#B7B0BF",
        fontWeight: 500
    }
}))

export const VerticalDivider = styled(Box)(({ theme }) => ({
    width: theme.spacing(0.5),
    height: theme.spacing(2.5),
    borderRadius: "2px",
    backgroundColor: theme.palette.text.disabled,
}))