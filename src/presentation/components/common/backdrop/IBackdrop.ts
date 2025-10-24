export interface DeleteBackdropProps {
    disabled?: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    title?: string | null;
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