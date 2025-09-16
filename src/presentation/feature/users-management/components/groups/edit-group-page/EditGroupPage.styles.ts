import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { Box, styled } from "@mui/material";

export const StyledEditGroupPageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
}))

export const GroupInfoMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(1fr, 350px))",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const StyledMembersMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2)
}))


export const StyledAccessesMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexWrap: "wrap",
}))