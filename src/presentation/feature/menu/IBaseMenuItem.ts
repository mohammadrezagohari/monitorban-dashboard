export interface MenuItemProps {
    label: string;
    icon: React.ReactNode;
    href?: string;
    active?: boolean;
    disabled?: boolean;
}