// import { ReactNode } from "react";

import { MouseEventHandler } from "react";

export interface IButton {
    children: string | number,
    size?: number,
    variant?: "text" | "contained" | "outlined",
    onClick?: MouseEventHandler | undefined,
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
    type?: string,
}

// 'primary' | 'error' | 'secondary' | 'success' | 'warning',