import { Checkbox as MuiCheckbox, styled, FormControlLabel } from "@mui/material";

export const StyledCheckbox = styled(MuiCheckbox)<{ fontSize: number }>(
    ({ theme, fontSize }) => {
        return {
            color: theme.palette.neutral[200],
            "& .MuiFormControlLabel-label": {
                transition: "color ease 0.3s",
                fontSize: fontSize,
            },
            "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
                color: theme.palette.neutral.main,
            },
        };
    }
);

export const StyledControledCheckbox = styled(FormControlLabel)<{ fontSize: number }>(
    ({ theme, fontSize }) => {
        return {
            color: theme.palette.neutral[200],
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
            "& .MuiFormControlLabel-label": {
                transition: "color ease 0.3s",
                fontSize: fontSize,
            },
            "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
                color: theme.palette.neutral.main,
            },
            "& .MuiButtonBase-root": {
                padding: 0,
            },
        };
    }
);