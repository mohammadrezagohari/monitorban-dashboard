export interface InputProps {
    id: string;
    placeholder?: string;
    icon?: boolean | React.ReactNode;
    type?: string;
}

export interface FormRowProps {
    label?: string;
    children: React.ReactNode;
    error?: string;
    gridColumn?: string;
}