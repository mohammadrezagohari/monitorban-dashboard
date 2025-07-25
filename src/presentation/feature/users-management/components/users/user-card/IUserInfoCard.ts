export interface UserInfoCardProps {
  user: {
    id: number;
    image?: string;
    fullName: string;
    position: string;
    phone: string;
    roles?: string[];
    groups?: string[];
    accesses?: string[];
  };
  // type: "regular" | "role" | "group";
  ROLE?: string;
  GROUP?: string;
}

