import { Variant } from "@mui/material/styles/createTypography";

export interface SensorSituationCardProps {
    status?: "default" | "accept" | "warning" | "danger",
    name?: string,
    icon?: React.ReactNode,
    data?: number,
    hour?: string,
    bgColor?: string,
}

export interface IconWrapperProps {
    bgColor?: string,
}

export interface TextProps {
    color?: string;
    variant?: Variant;
}
