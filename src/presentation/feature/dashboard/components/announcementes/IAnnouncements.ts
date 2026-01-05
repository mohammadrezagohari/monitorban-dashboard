import { IconName } from "@/presentation/components/common/icons";

export interface AnnounceItemProps {
    item: {
        id: string | number;
        icon: IconName;
        name: string;
        report: string;
        status: "danger" | "normal" | "warning";
    },
    announceStatus: "danger" | "normal" | "warning";
}