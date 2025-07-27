import { styled } from "@mui/material";
import { MainContainer } from "../section-container/SectionContainer.style";

export const AccessTypeMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "(1fr)",
    color: theme.palette.neutral.main,
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    }
}))