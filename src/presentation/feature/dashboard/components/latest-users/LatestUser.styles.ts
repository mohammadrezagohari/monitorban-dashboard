import { styled } from "@mui/material";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";

export const StyledMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(1),
    overflow: "scroll",
    height: "calc(100% - 55px)",

    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: theme.spacing(2),
    },

    "&::-webkit-scrollbar": { display: "none" },
}))