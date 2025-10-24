export interface AccessesType {
    accesses: string[];
}

export interface MemberType {
    fullName: string;
    phone: string;
    image: string;
    id: number;
    groups: string[]
    roles: string[]
}

export interface GroupType {
    accesses: AccessesType;
    groupName: string;
    icon: string;
    id: number;
    members: MemberType[];
}