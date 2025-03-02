import { FormControlLabel, styled } from "@mui/material";

export const FormControlLabelStyled = styled(FormControlLabel, {
    shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
    "& .MuiFormControlLabel-label": {
        fontSize: "0.875rem",
        color: selected ? "#F7F5FA" : "#B7B0BF",
        fontWeight: "600"
    },
    "&.Mui-disabled": {
        '& .MuiFormControlLabel-label': {
            color: "#5B5266"
        }
    }
}))