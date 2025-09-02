import { Box, styled, TextField, Typography } from "@mui/material";
import { BaseInputStatus } from "./IBaseInput";

export const Container = styled(Box)(() => ({}))

export const StyledLabel = styled(Typography)(({ theme }) => ({
    textAlign: "right",
    color: theme.palette.neutral[200],
    marginBottom: "0.5rem"
}))


export const StyledTextField = styled(TextField)<{ status?: BaseInputStatus }>(({ status, theme }) => ({

    autoComplete: "off",
    // height: 48,
    "&.MuiFormControl-root": {
        width: "100%",
        maxWidth: 350,
    },
    "& .MuiInputBase-root": {
        display: "block",
        height: 48,

    },
    "& input:-webkit-autofill": {
        boxShadow: "0 0 0 1000px #1e1e2d inset",
        WebkitTextFillColor: "#fff",
        transition: "background-color 5000s ease-in-out 0s"
    },
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
            color: theme.palette.neutral[300],
            typography: "body2",
        }

    },
    "& .MuiFormHelperText-root": {
        // backgroundColor: "red",
        height: theme.spacing(1.25),
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
        marginTop: theme.spacing(1),
        // marginInline: 0,
        textAlign: "right",
        color: theme.palette.error.main
        // color: status === "error"
        //     ? theme.palette.error.main
        //     : status === "accept"
        //         ? theme.palette.success.main
        //         : theme.palette.text.secondary,
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
        borderColor: theme.palette.text.disabled,
        borderStyle: "solid",
    }
}))

// export const IconWrraper = styled("div")(() => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: "24px",
//     height: "24px",
// }))