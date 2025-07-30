import { styled, TextField as MuiTextField } from "@mui/material";

export const TextField = styled(MuiTextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
    },

    "& .MuiInputBase-root": {
        padding: theme.spacing(2),
        borderRadius: "15px",

    }

}))