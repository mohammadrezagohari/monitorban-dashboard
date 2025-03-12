import { Box, styled, TextField, Typography } from "@mui/material";
import { BaseInputStatus } from "./IBaseInput";

export const Container = styled(Box)(() => ({
    margin: '20px 0'
}))

export const StyledLabel = styled(Typography)(({ theme }) => ({
    textAlign: "right",
    color: theme.palette.text.secondary,
}))


export const StyledTextField = styled(TextField)<{ status?: BaseInputStatus }>(({ status, theme }) => ({

    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: `1px solid ${status === "error"
                ? theme.palette.error.main
                : status === "accept"
                    ? theme.palette.success.main : theme.palette.text.disabled}`,
        },
        "&.Mui-focused fieldset": {
            border: `1px solid ${status === "error"
                ? theme.palette.error.main
                : status === "accept"
                    ? theme.palette.success.main : theme.palette.text.disabled}`,
        },
        "&:hover fieldset": {
            border: `1px solid ${status === "error"
                ? theme.palette.error.main
                : status === "accept"
                    ? theme.palette.success.main : theme.palette.text.disabled}`,
        },
        "& ::placeholder": {
            color: "text.disabled",
        }

    },
    "& .MuiFormHelperText-root": {
        fontSize: "12px",
        fontWeight: 500,
        marginTop: "8px",
        textAlign: "right",
        color: status === "error"
            ? theme.palette.error.main
            : status === "accept"
                ? theme.palette.success.main
                : theme.palette.text.secondary,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: status === "error"
            ? theme.palette.error.main
            : status === "accept"
                ? theme.palette.success.main
                : theme.palette.text.disabled,
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderColor: "#5B5266",
        borderStyle: "solid",
    }
}))

export const IconWrraper = styled("div")(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "24px",
    height: "24px",
}))