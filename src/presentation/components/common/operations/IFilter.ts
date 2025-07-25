export interface FilterOption {
    label: string;
    value: string;
}

export interface FilterPopoverProps {
    options: FilterOption[];
    selectedOptions: string[];
    onChange: (selected: string[]) => void;
    onApply: () => void;
    onClose: () => void;
}