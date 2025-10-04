import { StyledOTPInputProps } from "./ILogin";
import { Box, styled, TextField, Typography, TypographyProps } from "@mui/material";

export const StyledOTPContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",

    "& #phone": {
        marginBlock: theme.spacing(2),
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
        color: theme.palette.neutral.main,
    },

    "& #helper-text": {
        color: theme.palette.neutral[100],
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
        marginBottom: theme.spacing(2),
    },

}));

export const StyledOTPInput = styled(TextField,
    {
        shouldForwardProp: (prop) => prop !== "theme"
            && prop !== "isError"
    })<StyledOTPInputProps>(({ theme, isError }) => ({

        "& .MuiOutlinedInput-root": {
            fontSize: theme.typography.h3.fontSize,
            fontWeight: theme.typography.caption.fontWeight,
            input: {
                width: "54px",
                height: "58px",
                borderRadius: "1rem",
                border: `1px solid ${isError ? theme.palette.error.main : theme.palette.primary.dark}`,
                boxSizing: "border-box",
                textAlign: "center",
                color: isError ? theme.palette.error.main : theme.palette.neutral.main,
            },
            "& fieldset": { border: "none" },
        },
    }));

export const StyledLoginImageContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3),
    borderRadius: "25px",
    height: "calc(100vh - 48px)",
    overflow: "hidden",
    display: "none",

    alignItems: "center",
    justifyContent: "center",

    "& img": {
        width: "100%",
    },

    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

export const StyledLoginFormContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    color: "#EEE",
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h5.fontWeight,

    "& > div": {
        display: "flex",
        width: `calc(100vw - ${theme.spacing(4)})`,
        maxWidth: "350px",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },

    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
    },
}));

export const LoginHeader = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
}));

export const LoginCaption = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 200,
    marginBottom: theme.spacing(3),
    fontFamily: "Dana-ExtraLight",
}));

export const StyledLoginForm = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
}));

export const StyledOTPInputsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
}));

export const ErrorBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: theme.palette.error.main,

    "& #error-text": {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
    },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
    margin: theme.spacing(2, "auto"),
    textAlign: "center",
}));

export const StyledTimer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1.5, 3),
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    justifyContent: "center",

    "& #timer": {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
    },
}));
