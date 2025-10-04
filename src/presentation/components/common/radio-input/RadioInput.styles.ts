import { FormControlLabel, styled } from "@mui/material";

export const StyledRadioInput = styled(FormControlLabel)(({ theme }) => ({
    margin: 0,
    gap: theme.spacing(1),
    "& .MuiButtonBase-root.Mui-checked + .MuiFormControlLabel-label": {
        color: theme.palette.neutral.main,
    },
    "& .MuiButtonBase-root": {
        padding: 0,
    },
    "& .MuiFormControlLabel-label": {
        color: theme.palette.neutral[200],
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
    },
    "&.Mui-disabled": {
        "& .MuiFormControlLabel-label": {
            color: theme.palette.text.disabled,
        },
    },
}))