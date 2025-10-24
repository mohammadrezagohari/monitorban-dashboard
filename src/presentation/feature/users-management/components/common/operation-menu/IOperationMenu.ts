export interface OperationMenuProps {
    title: string;
    onDelete: () => void;
    onEdit: () => void;
    showUsers: () => void;
    showAccesses: () => void;
}