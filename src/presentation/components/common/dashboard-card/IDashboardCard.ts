import { BoxProps, Theme } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";

export interface IDashboardCardProps extends BoxProps {
    divider?: boolean;
    topContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    width?: string;
    onHandleClick?: () => void;
}

export interface CardContainerProps extends BoxProps {
    width?: string;
    theme?: Theme;
}

export interface TextProps {
    color?: string,
    variant?: TypographyProps["variant"],
}

export interface IColors {
    [key: string]: { icon: string, text: string }
}