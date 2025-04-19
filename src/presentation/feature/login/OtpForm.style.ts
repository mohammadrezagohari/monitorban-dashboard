import { Box, styled, TextField } from "@mui/material";

export const StyledOTPContainer = styled(Box)(()=> ({
    display: "flex",
    flexDirection: "column"
}))

export const StyledOTPInput = styled(TextField)(({ theme }) => ({

    "& .MuiOutlinedInput-root": {
        fontSize: 24,
        fontWeight: 400,
        input: {
            width: "54px",
            height: "58px",
            borderRadius: "1rem",
            border: `1px solid ${theme.palette.primary.dark}`,
            boxSizing: "border-box",
            textAlign: "center",
        },
        "& fieldset": { border: "none" },
    }
}))
