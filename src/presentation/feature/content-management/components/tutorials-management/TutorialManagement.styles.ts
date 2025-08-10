import { Box, styled } from "@mui/material";

export const StyledTutorialCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[600],
    padding: theme.spacing(2),
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    justifyContent: "space-between",
}))

export const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}))

export const DetailContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    justifyContent: "space-between",
    flex: 1,
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