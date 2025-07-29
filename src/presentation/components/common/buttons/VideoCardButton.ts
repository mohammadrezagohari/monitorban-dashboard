import { Button, ButtonProps, styled } from "@mui/material";
import { LinkProps } from "react-router-dom";

export const VideoCardButton = styled(Button)<ButtonProps & LinkProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    height: 21,
    color: theme.palette.text.disabled,
    padding: 0,
    
}))