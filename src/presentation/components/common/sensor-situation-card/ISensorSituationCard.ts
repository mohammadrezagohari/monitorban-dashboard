export interface SensorSituationCardProps {
    status?: "default" | "accept" | "warning" | "danger",
    name?: string,
    icon?: React.ReactNode,
    data?: number,
    hour?: string,
    bgColor?: string,
}
