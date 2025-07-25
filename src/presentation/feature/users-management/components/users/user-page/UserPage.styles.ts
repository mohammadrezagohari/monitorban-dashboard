import { Box, styled } from "@mui/material";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledUserPageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(4),
    }
}))

export const StyledUserMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: theme.spacing(1),
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const UserInfoMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 350px)) 1fr",
    gap: theme.spacing(2),
}))