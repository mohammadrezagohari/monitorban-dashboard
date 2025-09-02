export interface MenuItemProps {
    item: {
        label: string;
        icon: string;
        path?: string;
        onClick?: () => void
    }
}