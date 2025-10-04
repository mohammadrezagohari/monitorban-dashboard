export interface AnnounceItemProps {
    item: {
        id: string | number;
        icon: string;
        name: string;
        report: string;
        status: "danger" | "normal" | "warning";
    },
    announceStatus: "danger" | "normal" | "warning";
}