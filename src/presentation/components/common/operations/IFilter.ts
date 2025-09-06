export interface FilterOption {
    label: string;
    value: string;
    id: string | number;
}

export interface FilterPopoverProps {
    options: FilterOption[];
    selectedOptions?: string[];
    onChange: (selected: string[]) => void;
    onApply?: (data: any) => void;
    onClose?: () => void;
}