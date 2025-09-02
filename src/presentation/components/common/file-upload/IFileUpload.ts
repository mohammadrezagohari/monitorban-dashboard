export interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    accept?: string;
    maxSize?: number;
    label?: string;
    initialImage?: string;
    // disabled?: boolean;
}
