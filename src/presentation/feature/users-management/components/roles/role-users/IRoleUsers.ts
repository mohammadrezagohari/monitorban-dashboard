export interface RoleUserCardProps {
  user: {
    image: string;
    fullName: string;
    phone: string;
    roles: string[];
    groups: string[];
  };
  ROLE: string;
  type: "all" | "assigned";
}
