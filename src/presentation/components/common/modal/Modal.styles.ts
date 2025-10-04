import { Box, styled } from "@mui/material";

export const Overlay = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    // backgroundColor: theme.palette.text.secondary,
    backdropFilter: "blur(2px)",
    zIndex: 1000,
    transition: "all 0.5s",
}))

export const StyledModal = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}))