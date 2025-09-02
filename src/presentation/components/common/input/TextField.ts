import { styled, TextField as MuiTextField } from "@mui/material";

export const TextField = styled(MuiTextField)(({ theme }) => ({
    // fontFamily: "Dana",
    "& .MuiInputBase-input": {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
    },

    "& fieldset": {
        border: `1px solid ${theme.palette.text.disabled}`
    },

    "& .MuiInputBase-root": {
        padding: theme.spacing(2),
        borderRadius: "15px",
        "&:hover, &.Mui-focused": {
            "& fieldset": {
                border: `1px solid ${theme.palette.text.disabled}`
            }
        }
    }

}))