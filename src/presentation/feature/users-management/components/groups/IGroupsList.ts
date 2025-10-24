export interface GroupType {
    accesses: string[];
    groupName: string;
    icon: string;
    id: number;
    members: MemberType[];
}

export interface MemberType {
    fullName: string;
    id: number;
    image: string;
    phone: string;
    roles: string[];
    groups: string[];
}