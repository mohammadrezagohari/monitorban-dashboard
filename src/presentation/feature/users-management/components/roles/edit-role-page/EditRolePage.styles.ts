import { Box, styled } from "@mui/material";
import { MainContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";

export const StyledEditRolePageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
}))

export const RoleInfoMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(1fr, 350px))",
    alignItems: "center",
    gap: theme.spacing(2),
}))


export const AccessesMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexWrap: "wrap",
}))