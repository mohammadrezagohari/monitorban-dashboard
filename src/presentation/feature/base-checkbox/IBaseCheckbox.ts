import { CheckboxProps } from "@mui/material";

export interface BaseCheckboxProps extends CheckboxProps {
    checkedColor?: string;
    uncheckedColor?: string;
    text?: string;
}