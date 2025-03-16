import { Variant } from "@mui/material/styles/createTypography";

export interface SensorCategoryCardProps {
    icon: React.ReactNode,
    title: string,
    normalSensor: number,
    warningSensor: number,
    dangerSensor: number,
}

export interface TextProps {
    color?: string,
    variant?: Variant,
}