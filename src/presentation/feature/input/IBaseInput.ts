import { TextFieldProps } from "@mui/material";

export type BaseInputStatus = "default" | "accept" | "error"

export interface BaseInputProps extends Omit<TextFieldProps, "variant" | "error"> {
    label?: string;
    placeholder?: string;
    caption?: string;
    error?: boolean;
    status?: BaseInputStatus;
    primaryIcon?: React.ReactNode;
    secondaryIcon?: React.ReactNode;
}
