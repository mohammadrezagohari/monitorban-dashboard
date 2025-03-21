import { ReactNode } from "react"

export interface IButtons {
    children: string,
    size?: 32 | 34 | 36 | 40 | 48,
    variant?: "text" | "contained" | "outlined",
    color?: string,
    onClick?: (event: MouseEvent) => void,
    disabled?: boolean
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
}