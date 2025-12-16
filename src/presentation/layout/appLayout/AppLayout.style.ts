import { Box, BoxProps, styled } from "@mui/material";

export const StyledAppLayout = styled(Box)<BoxProps>(({ theme }) => ({
    // backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(2, 3),
        display: "grid",
        gridTemplateColumns: "15.625rem 1fr",
        gridTemplateRows: "auto 1fr",
        padding: theme.spacing(3),
    },
    minHeight: "100vh",
    maxWidth: "94rem",
    margin: "0 auto",
    padding: theme.spacing(9, 1.5, 3),
}))