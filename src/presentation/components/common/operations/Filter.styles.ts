import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: "0.5rem",
    padding: "1rem",
    borderRadius: "12px",
    backgroundColor: theme.palette.neutral[600],
    color: theme.palette.neutral.main,
    width: 300,
}))