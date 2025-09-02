import { ReactNode } from "react";

export interface UserRole {
    id: string | number;
    name: string;
}

export interface UserGroup {
    id: string | number;
    name: string;
}

export interface UserPermission {
    id: string | number;
    name: string;
}

export interface User {
    id: string | number;
    fullName: string;
    image: string;
    position: string;
    phone: string;
    roles: UserRole[];
    groups: UserGroup[];
    permissions: UserPermission[];
}

export type UserFormData = Omit<User, "id">;

export interface UserFormProps {
    user?: User;
    onSave: (data: UserFormData) => void;
    saveButton: ReactNode;
    mode: "create" | "edit";
}