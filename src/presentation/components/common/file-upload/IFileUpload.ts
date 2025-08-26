export interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    accept?: string;
    maxSize?: number;
    label?: string;
    // disabled?: boolean;
}
