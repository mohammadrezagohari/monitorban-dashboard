export interface ListCardContextType {
    columns: string;
    item: any;
    selectable?: boolean
}

export interface StyledListCardProps {
    columns: string;
}

export interface ListCardProps {
    children: React.ReactNode;
    columns: string;
    item: any;
    selectable?: boolean;
}
