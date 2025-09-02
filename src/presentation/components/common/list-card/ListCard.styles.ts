import { Box, styled } from "@mui/material";
import { StyledListCardProps } from "./IListCard";

export const StyledListCard = styled(Box)<StyledListCardProps>(
    ({ theme, columns }) => ({
        backgroundColor: theme.palette.neutral[600],
        padding: theme.spacing(2),
        borderRadius: "15px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: theme.spacing(2),
        [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: columns,
        },
    })
);


export const StyledTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexShrink: 0,

    "& > div:first-child": {
        width: "40px",
        height: "40px",

        [theme.breakpoints.up("lg")]: {
            width: "48px",
            height: "48px",
        }
    },

    "& > div:not(:first-child)": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
    },

    "& h4": {
        fontWeight: theme.typography.h5.fontWeight,
        fontSize: theme.typography.body2.fontSize,
        [theme.breakpoints.up("lg")]: {
            fontSize: theme.typography.h5.fontSize,
        }
    },

    "& p": {
        fontWeight: theme.typography.body2.fontWeight,
        fontSize: theme.typography.caption.fontSize,
        [theme.breakpoints.up("lg")]: {
            fontSize: theme.typography.body2.fontSize,
        }
    }
}))

export const StyledFirstDetail = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),

    "& > div": {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: theme.spacing(1.25),
    }
}))

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
    }
}))

export const StyledSecondDetail = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),
    width: "100%",

    "& > div": {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: theme.spacing(1.25),
        width: "100%  ",
    }
}))


export const StyledOperations = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),

    "& > *": {
        flex: 1,
        [theme.breakpoints.up("lg")]: { flex: "unset" },
    },
}))