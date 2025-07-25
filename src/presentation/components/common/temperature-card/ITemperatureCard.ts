export interface TemperatureCardProps {
    status?: "default" | "accept" | "warning" | "danger";
    name: string;
    icon: React.ReactNode;
    percentData: number;
    incrementData: number;
    decrementData: number;
    hour: string;
}
