import { SelectChangeEvent } from "@mui/material";
import { SelectProps as MuiSelectProps } from "@mui/material/Select"

export type Option = {
    label: string;
    value: string;
    id: number | string;
}


export type SelectProps = MuiSelectProps & {
    id: number | string;
    value?: string;
    // label: string;
    placeholder?: string;
    options: Option[];
    onChange?: (event: SelectChangeEvent) => void;
}