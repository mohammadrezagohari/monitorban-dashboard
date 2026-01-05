import { Box, styled } from "@mui/material";

export const StyledPageTitle = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
    justifyContent: "space-between",

    "&.column": {
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "flex-start",
        },
    },

    "& > h2": {
        fontSize: theme.typography.h3.fontSize,
        [theme.breakpoints.up("md")]: {
            fontSize: theme.typography.h2.fontSize,
        }
    },
}))