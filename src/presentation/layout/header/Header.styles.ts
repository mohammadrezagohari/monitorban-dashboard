import { styled } from "@mui/material";

export const StyledHeader = styled("header")(({theme}) =>({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const StyledMobileHeader = styled("header")(({ theme }) => ({
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("md")]: { gap: theme.spacing(3) },
}))