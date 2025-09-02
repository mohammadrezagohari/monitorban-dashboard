import { Box, styled, Typography } from "@mui/material";

export const StyledFAQListItem = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: "15px",
    padding: theme.spacing(2),
}))

export const StyledQuestionBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing(4),
    }
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    justifyContent: "flex-end",
}))

export const QuestionText = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
        whiteSpace: "nowrap",
        width: "calc(100% - 232px)",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
}))


export const StyledExpandBox = styled(Box)(({ expanded, panel }) => ({
    maxHeight: expanded === panel ? 500 : 0,
    overflow: "hidden",
    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: expanded === panel ? 1 : 0,
    transitionProperty: "max-height, opacity",
    transitionDuration: "0.4s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
}))


export const StyledFAQList = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))