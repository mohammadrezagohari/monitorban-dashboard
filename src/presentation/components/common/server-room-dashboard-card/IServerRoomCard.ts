export interface ServerRoomCardProps {
    title: string;
    icon: React.ReactNode;
    city: string;
    sensor?: number;
    rack?: number;
    onHandleClick?: () => void;
}
