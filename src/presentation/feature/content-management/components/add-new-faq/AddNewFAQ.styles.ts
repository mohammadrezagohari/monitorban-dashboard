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

export const AddNewFAQForm = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))