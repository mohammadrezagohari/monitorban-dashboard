import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: "12px",
    backgroundColor: theme.palette.neutral[600],
    color: theme.palette.neutral.main,
    width: 300,
}))