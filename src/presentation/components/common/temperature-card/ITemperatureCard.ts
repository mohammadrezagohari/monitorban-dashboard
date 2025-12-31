import { IconName } from "../icons";

export interface TemperatureCardProps {
    status?: "default" | "accept" | "warning" | "danger";
    name: string;
    icon: IconName;
    percentData: number;
    incrementData: number;
    decrementData: number;
    hour: string;
}
