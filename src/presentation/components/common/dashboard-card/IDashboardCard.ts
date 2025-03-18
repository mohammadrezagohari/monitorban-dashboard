import { Theme } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

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

export interface IconWrapperProps {
    bgcolor?: string,
}

export interface TextProps {
    color?: string,
    variant?: Variant,
}

export interface IColors {
    [key: string]: { icon: string, text: string }
}