export interface DeleteBackdropProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    roleTitle: string | null;
}

export interface ErrorBackdropProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export interface SuccessBackdropProps {
    open: boolean;
    onClose: () => void;
}