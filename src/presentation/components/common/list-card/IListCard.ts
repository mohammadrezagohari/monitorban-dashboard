import { ReactNode } from "react";

export interface ListCardContextType {
    columns: string;
    item: any;
    selectable?: boolean
}

export interface FirstDetailsProps {
    label: string;
}

export interface SecondDetailsProps {
    label: string;
    count?: number;
}

export interface OperationsProps {
    children: ReactNode
}

export interface ListCardProps {
    children: React.ReactNode;
    columns: string;
    item: any;
    selectable?: boolean;
}

export interface StyledListCardProps {
    columns: string;
}
