import { Button, styled } from "@mui/material";

export const StyledVideoCardButton = styled(Button)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    height: 21,
    color: theme.palette.text.disabled,
    padding: 0,

    "&:hover": {
        backgroundColor: "transparent"
    },

    "& span": {
        margin: 0,
    }
}))