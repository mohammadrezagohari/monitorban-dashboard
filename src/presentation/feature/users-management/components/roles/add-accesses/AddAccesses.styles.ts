import { Box, styled } from "@mui/material";

import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

export const StyledAddAccessesContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
}))




export const ServerRoomSelectionMainContainer = styled(MainContainer)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "(1fr)",
    color: theme.palette.neutral.main,
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
}))

export const StyledAccessItem = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    cursor: "pointer",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 535,
    border: "1px solid transparent",
    "&:hover": { borderColor: theme.palette.neutral[300] },
}))