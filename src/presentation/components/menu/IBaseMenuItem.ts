import { IconName } from "../common/icons";

export interface MenuItemProps {
    item: {
        label: string;
        icon: IconName;
        path?: string;
        onClick?: () => void
    }
}