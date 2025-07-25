import { styled } from "@mui/material";

import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledMainContainer = styled(MainContainer)(({ theme }) => ({
    overflow: "scroll",
    height: "calc(100% - 55px)",
    "&::-webkit-scrollbar": { display: "none" },
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        display: "grid",
        gap: theme.spacing(2),
    }
}))