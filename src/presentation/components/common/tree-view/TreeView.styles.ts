import { Box, styled } from "@mui/material";

export const StyledTreeView = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
}));

export const StyledTreeItem = styled(Box)(({ theme }) => ({
    marginInlineStart: theme.spacing(2),
}));

export const StyledMainItemContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}));

export const StyledMainItemContent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}))