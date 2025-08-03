import { ButtonProps as MuiButtonProps } from "@mui/material";

export type CustomeColorSet = {
    text: string;
    background: string;
    border: string;
    hover: {
        text: string;
        background: string;
        border: string;
    };
};

export type ButtonSize = "large" | "medium" | "small" | "xsmall" | "xxsmall";

export interface ButtonProps extends Omit<MuiButtonProps, "size" | "variant" | "colorType"> {
    variant: "contained" | "outlined" | "text";
    size?: ButtonSize;
    colorType?: "primary" | "secondary" | "success" | "error";
    to?: string;
}
