import { Backdrop as MuiBackdrop, Box, styled, Typography } from "@mui/material";

export const Backdrop = styled(MuiBackdrop)(({ theme }) => ({
    // zIndex: theme.zIndex.drawer + 1,
}))

export const StyledBackdropContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.neutral[300]}`,
    borderRadius: "25px",
    backgroundColor: theme.palette.neutral[700],

    [theme.breakpoints.down("md")]: {
        width: "85vw",
    },
}))

export const Title = styled(Typography)<{ $type: "error" | "warning" | "success" }>(({ theme, $type }) => ({
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h5.fontSize,
    },
    ...($type === "error" && {
        color: theme.palette.error.main,
    }),
    ...($type === "warning" && { //@ts-ignore
        color: theme?.palette?.warning[500],
    }),
    ...($type === "success" && {
        color: theme.palette.success.main,
    }),
}))

export const Message = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    marginBottom: theme.spacing(3),
    color: theme.palette.neutral[200],
    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.body1.fontSize,
    },
    "& span": {
        // @ts-ignore
        color: theme.palette.primary[300],
    }
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: theme.spacing(2),
}))