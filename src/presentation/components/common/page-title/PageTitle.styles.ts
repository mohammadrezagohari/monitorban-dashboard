import { Box, styled } from "@mui/material";

export const StyledPageTitle = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > h2": {
        fontSize: theme.typography.h3.fontSize,
        [theme.breakpoints.up("md")]: {
            fontSize: theme.typography.h2.fontSize,
        }
    },
}))