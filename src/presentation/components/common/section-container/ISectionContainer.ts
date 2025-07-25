import { BoxProps } from "@mui/material";
import { ReactNode } from "react";

export interface ISectionContainerProps extends BoxProps{
    width?: string | number;
    height?: string | number;
    children: ReactNode;
}