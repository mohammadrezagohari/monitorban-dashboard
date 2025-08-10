import { Box, FormHelperText, FormLabel, Input, styled } from "@mui/material";

export const StyledFormRow = styled(Box)(({ theme, props }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    gridColumn: props?.gridColumn,
    width: "100%",
    // maxWidth: 310,
    position: "relative",
    // [theme.breakpoints.up("md")]: { maxWidth: 350, }
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
    bottom: 0,
}))

export const StyledInput = styled(Input)(({ theme }) => ({
    backgroundColor: theme.palette.neutral[700],
    color: theme.palette.neutral[100],
    ...theme.typography.body2,
    height: 48,
    width: "100%",
    padding: theme.spacing(1.5, 2),
    borderRadius: "15px",
    border: `1px solid ${theme.palette.text.disabled}`,
    fontFamily: "Dana",
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
    }
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