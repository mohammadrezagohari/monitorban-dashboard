import { styled } from "@mui/material";

export const StyledAnnounceItem = styled("li")<{ isLastItem: boolean }>(({ theme, isLastItem }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    padding: theme.spacing(1, 0),
    borderBottom: isLastItem
        ? "none"
        : `1px solid ${theme.palette.text.disabled}`,
}));
