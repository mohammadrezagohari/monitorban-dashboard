import { CardContent as MuiCardContent, styled, Card as MuiCard, Typography, CardActions as MuiCardActions } from "@mui/material";

export const Card = styled(MuiCard)(({ theme }) => ({
    maxWidth: 319,
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),

    [theme.breakpoints.up("md")]: {
        maxWidth: 260,
    }
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
    height: 50,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,

    [theme.breakpoints.up("md")]: {
        height: 75,
    },
}))

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&.MuiCardActions-root>:not(style)": {
        margin: 0,
    },
    "&.MuiCardActions-root": {
        padding: 0,
    },
}))

export const StyledVideoType = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.palette.neutral[200],
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
}))

export const CardContent = styled(MuiCardContent)({
    padding: 0,
})