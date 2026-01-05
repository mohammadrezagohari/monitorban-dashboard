import { MainContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import { Box, styled, Typography } from "@mui/material";

export const StyledFAQCard = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],

    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
    },
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: theme.spacing(2),
}))

export const QuestionText = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "calc(100% - 232px)",
    }
}))

export const StyledQuestionsBox = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))