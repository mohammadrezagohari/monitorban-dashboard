import { Control } from "react-hook-form";

export interface ControledCheckboxProps {
    label?: string;
    name: string;
    itemValue: string;
    control: Control<any>;
    size?: number;
    fontSize?: number;
} 