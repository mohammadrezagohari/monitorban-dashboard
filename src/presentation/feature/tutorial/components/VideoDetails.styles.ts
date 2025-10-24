import { styled } from "@mui/material";

export const Video = styled("video")(({ theme }) => ({
    width: "100%",
    height: "auto",
    borderRadius: "15px",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
        borderRadius: "25px",
    },
}))