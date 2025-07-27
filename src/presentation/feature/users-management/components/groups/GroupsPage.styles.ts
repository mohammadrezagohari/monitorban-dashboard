import { Box, styled } from "@mui/material";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledGroupCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    padding: theme.spacing(2),
    borderRadius: "15px",
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const StyledMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
}))

export const StyledTitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}))