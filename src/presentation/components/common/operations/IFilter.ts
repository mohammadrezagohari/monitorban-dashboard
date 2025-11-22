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
    anchorRef?: React.RefObject<HTMLDivElement>;
}

export type FilterFormValues = {
    "sensor-type": string;
    "data-centers": string[];
}