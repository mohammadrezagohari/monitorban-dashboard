import { Box, FormHelperText, FormLabel, Input, styled } from "@mui/material";

export const StyledFormRow = styled(Box)<{ $error?: boolean; gridColumn?: string }>(({ theme, $error, gridColumn, ...props }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    gridColumn: gridColumn,
    width: "100%",
    // maxWidth: 310,
    position: "relative",
    // [theme.breakpoints.up("md")]: { maxWidth: 350, }
    "& .MuiInputBase-root": {
        border: `1px solid ${$error ? theme.palette.error.main : theme.palette.text.disabled}`,
    }
}))

export const Label = styled(FormLabel)(({ theme }) => ({
    // textAlign: "right",
    color: theme.palette.neutral[200],
    // marginBottom: "0.5rem"
}))

export const Error = styled(FormHelperText)(({ theme }) => ({
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.error.main,
    position: "absolute",
    right: 0,
    // bottom: 0,
    top: "100%",
}))

// export const StyledInput = styled(TextField)(({ theme }) => ({
export const StyledInput = styled(Input)(({ theme, error }) => ({
    backgroundColor: theme.palette.neutral[700],
    // color: "red",
    color: theme.palette.neutral[100],
    ...theme.typography.body2,
    height: 48,
    width: "100%",
    padding: theme.spacing(1.5, 2),
    borderRadius: "15px",
    border: `1px solid ${theme.palette.text.disabled}`,
    fontFamily: "Dana-Regular",
    "&:focus": {
        outline: "none"
    },
    "&:placeholder": {
        color: "red"
    },
    "&::before, &::after": {
        content: "''",
        border: "none",
    },
    "&:hover:not(.Mui-disabled,.Mui-error)::before, &:hover:not(.Mui-disabled,.Mui-error)::after": {
        border: "none",
    },
    "& button, & input": {
        padding: 0,
    },
    "& .MuiInputAdornment-root": {
        margin: 0,
    },
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },

    '& input:-webkit-autofill': {
        '-webkit-box-shadow': `0 0 0 100px ${theme.palette.neutral[700]} inset`,
        // '-webkit-box-shadow': `unset`,
        '-webkit-text-fill-color': theme.palette.neutral[100],
        caretColor: theme.palette.neutral[100],
        transition: 'background-color 5000s ease-in-out 0s',
    },

    '& input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
        '-webkit-box-shadow': `0 0 0 100px ${theme.palette.neutral[700]} inset`,
        '-webkit-text-fill-color': theme.palette.neutral[100],
    },

    '& input:autofill': {
        backgroundColor: theme.palette.neutral[700],
        color: theme.palette.neutral[100],
    },
}))


// export const StyledSelect = styled(Select)(({ theme }) => ({
//     fontSize: 14,
//     fontWeight: 500,
//     height: 48,
//     padding: "1rem",
//     borderRadius: "15px",
//     border: `1px solid ${theme.palette.text.disabled}`,
//     fontFamily: "Dana",
//     "&:focus, & .Mui-focused": {
//         outline: "none"
//     },
//     // "& .Mui-focused": {}
// }))