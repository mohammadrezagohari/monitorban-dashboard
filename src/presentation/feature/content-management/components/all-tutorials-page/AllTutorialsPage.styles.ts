import { styled } from "@mui/material";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledTutorialsList = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))