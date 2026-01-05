import { Theme } from "@mui/system";
import { SxProps } from "@mui/material";
import { ButtonSize } from "./IButton";

export const buttonSizes: Record<ButtonSize, SxProps<Theme>> = {
    large: {
        padding: "12px 24px",
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "150%",
        height: 48,
    },
    medium: {
        padding: "12px 24px",
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "150%",
        height: 40,
    },
    small: {
        padding: "12px 24px",
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "150%",
        height: 36,
    },
    xsmall: {
        padding: "12px 24px",
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: "150%",
        height: 34,
    },
    xxsmall: {
        padding: "8px 12px",
        fontSize: "0.75rem",
        fontWeight: 500,
        lineHeight: "150%",
        height: 32,
    },
};

export const colors = {
    contained: {
        primary: {
            text: "primary.50",
            bg: "primary.500",
            border: "primary.500",
            hover: {
                text: "text.primary",
                bg: "primary.700",
                border: "primary.700",
            },
        },
        secondary: {
            text: "neutral.50",
            bg: "secondary.500",
            border: "secondary.500",
            hover: {
                text: "neutral.50",
                bg: "secondary.600",
                border: "secondary.600",
            },
        },
        success: {
            text: "neutral.50",
            bg: "success.400",
            border: "success.400",
            hover: {
                text: "neutral.50",
                bg: "success.600",
                border: "success.600",
            },
        },
        error: {
            text: "neutral.50",
            bg: "error.400",
            border: "error.400",
            hover: {
                text: "neutral.50",
                bg: "error.600",
                border: "error.600",
            },
        },
        disabled: {
            text: "neutral.main",
            bg: "text.disabled",
            border: "text.disabled"
        },
    },
    outlined: {
        primary: {
            text: "primary.dark",
            bg: "",
            border: "primary.dark",
            hover: {
                text: "primary.100",
                bg: "",
                border: "primary.100",
            },
        },
        secondary: {
            text: "secondary.200",
            bg: "",
            border: "secondary.500",
            hover: {
                text: "secondary.200",
                bg: "secondary.800",
                border: "secondary.500",
            },
        },
        success: {
            text: "success.400",
            bg: "",
            border: "success.400",
            hover: {
                text: "success.400",
                bg: "success.800",
                border: "success.400",
            },
        },
        error: {
            text: "error.400",
            bg: "",
            border: "error.400",
            hover: {
                text: "error.400",
                bg: "error.800",
                border: "error.400",
            },
        },
        disabled: {
            text: "text.disabled",
            bg: "transparent",
            border: "text.disabled"
        },
    },
    text: {
        primary: {
            text: "primary.200",
            bg: "",
            border: "",
            hover: {
                text: "primary.100",
                bg: "",
                border: "",
            },
        },
        secondary: {
            text: "secondary.200",
            bg: "",
            border: "",
            hover: {
                text: "secondary.50",
                bg: "",
                border: "",
            },
        },
        success: {
            text: "success.400",
            bg: "",
            border: "",
            hover: {
                text: "success.200",
                bg: "",
                border: "",
            },
        },
        error: {
            text: "error.400",
            bg: "",
            border: "",
            hover: {
                text: "error.200",
                bg: "",
                border: "",
            },
        },
        disabled: {
            text: "text.disabled",
            bg: "transparent",
            border: ""
        },
    },
};

