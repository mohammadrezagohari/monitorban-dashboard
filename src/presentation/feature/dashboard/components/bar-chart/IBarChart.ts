export interface BarChartProps {
    period: "1y" | "6m" | "3m" | "1m" | "1w" | "1d";
    values: number[];
}