
export interface IUser {
    image?: string;
    fullName?: string;
    position?: string;
}

export interface UserAccountCardProps {
    user: IUser;
}