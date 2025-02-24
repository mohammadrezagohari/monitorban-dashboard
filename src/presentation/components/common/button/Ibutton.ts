import { ReactNode } from "react";

export interface IButton {
    children: ReactNode,
    size?: "lg" | "md" | "sm" | "xs" | "xxs",
    variant?: "text" | "contained" | "outlined",
    color?: string,
    onClick?: () => void,
    disabled?: boolean
}

// 'primary' | 'error' | 'secondary' | 'success' | 'warning',