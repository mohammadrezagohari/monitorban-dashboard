// import { ReactNode } from "react";

export interface IButton {
    children: string,
    size?: number,
    variant?: "text" | "contained" | "outlined",
    onClick?: () => void,
    disabled?: boolean,
    textColor?: string,
    textHoverColor?: string,
    bgColor?: string,
    bgHoverColor?: string,
    borderColor?: string,
    borderHoverColor?: string,
    leftIcon?: any,
    rightIcon?: any,
    iconSize?: number,
    padding?: string,
    fontSize?: number,
}

// 'primary' | 'error' | 'secondary' | 'success' | 'warning',