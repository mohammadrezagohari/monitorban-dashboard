import { Box, styled } from "@mui/material";

import { MainContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";

export const StyledMainContainer = styled(MainContainer)(({ theme }) => ({
    overflow: "scroll",
    height: "calc(100% - 55px)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),

    "&::-webkit-scrollbar": { display: "none" },

    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        display: "grid",
        gap: theme.spacing(2),
    }
}));

export const StyledSensorCard = styled(Box)(() => ({
    gridRow: "1 / 3",
}));