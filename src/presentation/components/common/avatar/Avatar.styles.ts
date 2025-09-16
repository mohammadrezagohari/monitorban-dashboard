import { Avatar as MuiAvatar, Box, IconButton, styled } from "@mui/material";

export const StyledImageInputContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    mr: theme.spacing(1.25),
}))

export const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    width: 90,
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    borderRadius: "10px",
    p: "7px",
}))

// /////

export const StyledAvatar = styled(MuiAvatar)<{ size: number }>(({ theme, size }) => ({
    width: size,
    height: size,
    backgroundColor: theme.palette.neutral[500],
}))