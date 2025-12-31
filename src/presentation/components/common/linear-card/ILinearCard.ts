import { IconName } from "../icons";

export interface LinearProps {
    icon?: IconName;
    iconColor?: string;
    children?: string;
    color?: string;
    handleClick?: () => void;
}