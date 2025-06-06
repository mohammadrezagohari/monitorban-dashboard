import { Box, styled, TextField } from "@mui/material";

export const StyledOTPContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column"
}))


interface StyledOTPInputProps {
    theme?: any;
    isError?: boolean; 
}

export const StyledOTPInput = styled(TextField,
    {
        shouldForwardProp: (prop)=>prop !== "theme" 
        && prop !== "isError"})<StyledOTPInputProps>(({ theme, isError }) => ({

    "& .MuiOutlinedInput-root": {
        fontSize: 24,
        fontWeight: 400,
        input: {
            width: "54px",
            height: "58px",
            borderRadius: "1rem",
            border: `1px solid ${isError ? theme.palette.error.main : theme.palette.primary.dark}`,
            boxSizing: "border-box",
            textAlign: "center",
            color: isError ? theme.palette.error.main : theme.palette.neutral.main
        },
        "& fieldset": { border: "none" },
    }
}))
