export interface FAQProps {
    expanded: string | null;
    onChange: (p: string) => void;
}

export interface FAQType {
    id: number;
    question: string;
    answer: string;
}

export interface FAQItemProps extends FAQProps {
    item: FAQType;
    panel: string;
}