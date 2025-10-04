export interface MessageCardProps {
    message: {
        message: string;
        answer: string;
    };
    expanded: string | null;
    panel: string;
    onChange: (panel: string) => void;
}