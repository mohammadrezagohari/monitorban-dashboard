import { Box, IconButton, styled } from "@mui/material";

export const StyledServerRoomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(4),
    },
}))

export const StyledImageInputContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    mr: theme.spacing(1.25),
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}))

export const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    width: 90,
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    borderRadius: "10px",
    p: "7px",
}))