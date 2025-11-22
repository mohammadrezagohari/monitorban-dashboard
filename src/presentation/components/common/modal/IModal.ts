import { ReactElement, ReactNode } from "react";

export interface ModalContextType {
    open: (name: string) => void;
    close: () => void;
    openName: string;
}

export interface ModalProps {
    children: ReactNode; //10.05.2025
}

export interface WindowProps {
    children: ReactNode;
    name: string;
}

export interface OpenProps {
    children: ReactNode;
    opens: string;
}