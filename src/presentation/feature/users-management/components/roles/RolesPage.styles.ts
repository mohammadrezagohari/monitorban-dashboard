import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { Box, styled } from "@mui/material";

export const StyledRoleCardContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
        borderRadius: "25px",
    }
}))

export const StyledMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    alignItems: "center",
    gap: theme.spacing(2),
    justifyContent: "space-between",
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const AccessesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: theme.spacing(1),
}))