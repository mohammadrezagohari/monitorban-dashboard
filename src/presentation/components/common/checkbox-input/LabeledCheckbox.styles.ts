import { FormControlLabel, styled } from "@mui/material";

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    margin: 0,
    color: 'red'
}));
