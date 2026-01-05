import { IconName } from "../icons";

export interface SensorSituationCardProps {
    status?: "default" | "accept" | "warning" | "danger",
    name?: string,
    icon?: IconName,
    data?: number,
    hour?: string,
    bgColor?: string,
}
