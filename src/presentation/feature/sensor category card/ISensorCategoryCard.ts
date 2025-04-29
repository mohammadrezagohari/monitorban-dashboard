export interface SensorCategoryCardProps {
    icon: React.ReactNode;
    title: string;
    normalSensor: number;
    warningSensor: number;
    dangerSensor: number;
    onClick: () => void;
}