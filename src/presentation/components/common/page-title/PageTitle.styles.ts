import { Box, styled } from "@mui/material";

export const StyledPageTitle = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > h2": {
        fontSize: 24,
        [theme.breakpoints.up("md")]: {
            fontSize: 32
        }
    },
}))