import { IconName } from "../icons";

export interface SensorCategoryCardProps {
    icon: IconName;
    title: string;
    normalSensor: number;
    warningSensor: number;
    dangerSensor: number;
    onClick: () => void;
}