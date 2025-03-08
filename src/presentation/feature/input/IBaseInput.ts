import { TextFieldProps } from "@mui/material";

export type BaseInputStatus = "default" | "accept" | "error"

export interface BaseInputProps extends Omit<TextFieldProps, "variant" | "error"> {
    label?: string;
    caption?: string;
    status?: BaseInputStatus;
    icon?: React.ReactNode;
}
