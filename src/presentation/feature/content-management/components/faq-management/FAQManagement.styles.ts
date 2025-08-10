import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { Box, styled, Typography } from "@mui/material";

export const StyledFAQCard = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: "15px",
    backgroundColor: theme.palette.neutral[600],
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const QuestionText = styled(Typography)(() => ({
    whiteSpace: "nowrap",
    flexGrow: 1,
    width: "calc(100% - 232px)",
    overflow: "hidden",
    textOverflow: "ellipsis",
}))

export const StyledQuestionsBox = styled(MainContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}))