export interface ITextInput {
    id: string
    value: string
    color?: string
    background?: string
    size: "sm" | "md" | "lg" | "xl"
    label?: string
    type: "filled" | "outlined" | "standard"
}