export interface FAQItemProps {
    faq: {
        id: string | number;
        question: string;
        answer: string;
    };
    expanded: string | null;
    panel: string;
    onChange: (panel: string) => void;
}