import { styled } from "@mui/material";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledSettingsMainSection = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(2),
}))