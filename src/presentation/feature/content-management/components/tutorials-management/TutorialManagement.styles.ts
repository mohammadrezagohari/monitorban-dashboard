import { Box, styled, Typography } from "@mui/material";

export const StyledTutorialCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    padding: theme.spacing(2),
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
        alignItems: "center",
        flexDirection: "row",
        gap: theme.spacing(4),
    },
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    justifyContent: "flex-end"
}))

export const DetailContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    justifyContent: "space-between",
    flex: 1,
    [theme.breakpoints.up("md")]: {
        alignItems: "center",
        flexDirection: "row",
        gap: theme.spacing(4),
    },
}))

export const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

}))

export const TypeBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    alignItems: "flex-start",
}))


export const TutorialsList = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral.main,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body1.fontWeight,

    [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
    },
}))