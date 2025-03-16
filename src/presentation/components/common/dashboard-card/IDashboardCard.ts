import { Theme } from "@mui/material";

export interface IDashboardCardProps {
    divider?: boolean;
    topContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    width?: string;
}

export interface CardContainerProps {
    width?: string;
    theme?: Theme;
}