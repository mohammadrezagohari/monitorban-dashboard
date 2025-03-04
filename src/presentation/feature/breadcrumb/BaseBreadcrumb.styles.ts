import { Breadcrumbs, styled } from "@mui/material";

export const StyledBreadcrumbs = styled(Breadcrumbs)({
    fontSize: "14px",
    "& a": {
        textDecoration: 'none',
        fontWeight: 500,
        color: '#D5D0DB', //TODO:: should be changed color value after added theme palette
        "&:hover": {
            color: "#F7F5FA",
        },
    },
    "& .MuiTypography-root": {
        color: '#D5D0DB'
    },
    "& .MuiBreadcrumbs-separator": {
        color: "#B7B0BF",
        fontWeight: 500
    }
})