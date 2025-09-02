import { Box, styled, Typography } from "@mui/material";

export const StyledRoomCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 3fr 1fr",
    gap: theme.spacing(2),
}))

export const StyledTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexShrink: 0,

    "& > span:first-of-type": {
        width: "40px",
        height: "40px",

        [theme.breakpoints.up("lg")]: {
            width: "48px",
            height: "48px",
        },
    },

    "& > div": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
    },

    "& h4": {
        fontWeight: 700,
        fontSize: 14,
        [theme.breakpoints.up("lg")]: {
            fontSize: 20,
        },
    },

    "& p": {
        fontWeight: 500,
        fontSize: 12,
        [theme.breakpoints.up("lg")]: {
            fontSize: 14,
        },
    },
}));

export const StyledDetail = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),

    "& > div": {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.up("lg")]: { flexWrap: "nowrap" },
        gap: theme.spacing(1.25),
    },
}));

export const StyledOperations = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),

    "& > *": {
        flex: 1,
        [theme.breakpoints.up("lg")]: { flex: "unset" },
    },
}));

export const StyledRoomTitle = styled(Typography)(({ theme }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: theme.palette.neutral.main,
}))