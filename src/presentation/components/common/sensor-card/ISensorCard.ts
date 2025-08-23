interface Sensor {
    id: number;
    icon: string;
    name: string;
    normalSensorCount: number;
    warningSensorCount: number;
    dangerSensorCount: number;
}

export interface SensorCardProps {
    sensor: Sensor
}