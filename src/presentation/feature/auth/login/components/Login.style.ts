import { StyledOTPInputProps } from "./ILogin";
import { Box, styled, TextField } from "@mui/material";

export const StyledOTPContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column"
}))

export const StyledOTPInput = styled(TextField,
    {
        shouldForwardProp: (prop) => prop !== "theme"
            && prop !== "isError"
    })<StyledOTPInputProps>(({ theme, isError }) => ({

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

export const StyledLoginImageContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    margin: 24,
    borderRadius: "25px",
    height: "calc(100vh - 48px)",
    overflow: "hidden",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
        width: "100%",
    },
}));

export const StyledLoginFormContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    color: "#EEE",
    fontSize: 48,
    fontWeight: "bold",

    "& > div": {
        display: "flex",
        width: "350px",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
}));