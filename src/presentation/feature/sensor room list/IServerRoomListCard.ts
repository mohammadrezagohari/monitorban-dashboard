export interface ServerRoomListProps {
  icon: React.ReactNode;
  title: string;
  city: string;
  status?: "normal" | "warning" | "error";
  sensors: string[];
}

