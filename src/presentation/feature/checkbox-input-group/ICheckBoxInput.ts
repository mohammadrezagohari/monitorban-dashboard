export interface CheckBoxInputProps {
    options: { value: string; label: string; disabled?: boolean }[];
    label?: string;
    selectedValues: string[];
    onChange: (value: string[]) => void;
}