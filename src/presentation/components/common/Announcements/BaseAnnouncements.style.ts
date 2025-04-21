import { Box, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(() => ({
    component: "section",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: "50px",
}))

export const StyledImgContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "neutral.600", //theme.palette.neutral[600], //TODO
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    padding: "12px",
}))

export const StyledContextContainer = styled(Box)(() => ({
    component: "div",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
}))
