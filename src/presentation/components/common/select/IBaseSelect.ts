import { SelectChangeEvent, SelectProps } from "@mui/material";

export interface Option {
    label: string;
    value: string;
    disabled?: boolean;
    color?: { text: string; border: string };
}


export interface BaseSelectProps
    extends Omit<SelectProps, "value" | "onChange"> {
    options: Option[];
    value: string;
    onChange: (event: any) => void;
    placeholder?: string;
    icon?: React.ReactNode;
    iconColor?: string;
    iconSize?: number;
}

export interface StyledSelectProps {
    selectedTextColor: string;
    selectedBorderColor: string;
}