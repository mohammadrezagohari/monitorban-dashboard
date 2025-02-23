export interface ITextInput {
    id: string
    label?: string
    value: string
    color?: string
    background?: string
    size: "sm" | "md" | "lg" | "xl"
    type: "filled" | "outlined" | "standard"
}