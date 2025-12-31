import { IconName } from "../icons";

interface Sensor {
    id: number;
    icon: IconName;
    name: string;
    normalSensorCount: number;
    warningSensorCount: number;
    dangerSensorCount: number;
}

export interface SensorCardProps {
    sensor: Sensor
}