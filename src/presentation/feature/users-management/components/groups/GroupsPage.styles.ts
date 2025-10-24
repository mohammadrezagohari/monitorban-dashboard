import { Box, styled } from "@mui/material";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";

export const StyledGroupCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
        borderRadius: "25px",
    }
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

export const StyledMembersContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
}))

export const TagsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexWrap: "wrap",
}))

export const StyledAccessesContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    transition: "height 0.3s ease",
    overflow: "hidden",
}))

export const GroupListMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))