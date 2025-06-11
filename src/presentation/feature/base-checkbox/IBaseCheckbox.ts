import { CheckboxProps } from "@mui/material";
import { ChangeEvent } from "react";

export interface BaseCheckboxProps extends CheckboxProps {
    checkedColor?: string;
    uncheckedColor?: string;
    text?: string;
    checked?: boolean;
    setChecked?: (event: ChangeEvent, checked: boolean) => void;
}