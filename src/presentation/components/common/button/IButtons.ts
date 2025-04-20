import { ReactNode } from "react"

export interface IButtons {
    children: string | number
    size?: 32 | 34 | 36 | 40 | 48,
    variant?: "text" | "contained" | "outlined",
    color?: string,
    type?: string,
    onClick?: (event: MouseEvent) => void,
    disabled?: boolean
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
}