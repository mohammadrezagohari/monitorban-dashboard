import { IconName } from "../icons";

export interface ServerRoomCardProps {
    title: string;
    icon: IconName;
    city: string;
    sensor?: number;
    rack?: number;
    onHandleClick?: () => void;
}
