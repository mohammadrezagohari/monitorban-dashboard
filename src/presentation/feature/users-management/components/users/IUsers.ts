export interface IUser {
    id: number;
    fullName: string;
    image?: string;
    position: string;
    phone: string;
    roles?: string[];
    groups?: string[];
    accesses?: string[];
}
