import { InputProps as MuiInputProps } from "@mui/material";
import { IconName } from "../icons";

export interface InputProps extends MuiInputProps {
    id: string;
    placeholder?: string;
    icon?: IconName;
    type?: string;
}

export interface FormRowProps {
    label?: string;
    children: React.ReactNode;
    error?: string;
    gridColumn?: string;
}