import { Box, styled } from "@mui/material";

export const StyledUserCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "10px",
    padding: theme.spacing(1.5),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),

    [theme.breakpoints.up("md")]: {
        borderRadius: "25px",
    }
}));

export const StyledUserDetails = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    overflow: "hidden",
    maxWidth: "min(136px, 1fr)",

    "& #user-name": {
        color: theme.palette.neutral.main,
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    "& #user-position": {
        color: theme.palette.neutral[300],
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
    }
}))