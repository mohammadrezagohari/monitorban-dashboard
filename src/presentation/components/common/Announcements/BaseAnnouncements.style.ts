import { Box, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
    component: "section",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    height: "50px",
}))

export const StyledImgContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "neutral.600", //theme.palette.neutral[600], //TODO
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    padding: theme.spacing(1.5),
}))

export const StyledContextContainer = styled(Box)(({ theme }) => ({
    component: "div",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),
}))
