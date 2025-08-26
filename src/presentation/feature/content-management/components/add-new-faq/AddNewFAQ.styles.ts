import { Box, styled } from "@mui/material";

export const ButtonContainer = styled(Box)(({ theme }) => ({
    "& *": {
        justifySelf: "flex-end",
        width: 127,
        [theme.breakpoints.up("md")]: {
            width: "unset",
        }
    }
}))