import { List, styled } from "@mui/material";

export const StyledList = styled(List)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        marginBlock: theme.spacing(8),
    },
}))