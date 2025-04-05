export interface MenuItemProps {
    label: string;
    icon: React.ReactNode;
    href?: string;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void
}