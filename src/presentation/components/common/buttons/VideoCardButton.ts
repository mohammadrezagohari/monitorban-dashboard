import { Button, ButtonProps, styled } from "@mui/material";

export const VideoCardButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    height: 21,
    color: theme.palette.text.disabled,
    padding: 0,

    "& span": {
        margin: 0,
    }
}))