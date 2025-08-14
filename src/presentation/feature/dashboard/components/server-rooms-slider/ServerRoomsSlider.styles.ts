import { Box, styled } from "@mui/material";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";

export const StyledServerRoomsSlider = styled(SectionContainer)(() => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    // gap: "24px",
}));


export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}))