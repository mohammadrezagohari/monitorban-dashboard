import { ReactElement, ReactNode } from "react";

export interface ModalContextType {
    open: (name: string) => void;
    close: () => void;
    openName: string;
}

export interface ModalProps {
    children: ReactElement;
}

export interface WindowProps {
    children: ReactNode;
    name: string;
}

export interface OpenProps {
    children: ReactElement;
    opens: string;
}