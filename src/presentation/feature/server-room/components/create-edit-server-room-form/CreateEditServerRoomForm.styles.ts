import { Box, styled } from "@mui/material";

export const StyledServerRoomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(4),
    },
}))

