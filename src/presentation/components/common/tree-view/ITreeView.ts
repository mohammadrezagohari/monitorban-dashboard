import { Control } from "react-hook-form";

export interface Node {
    id: string;
    name: string;
    sensors?: Node[];
}

export interface TreeItemProps {
    node: Node;
    control: Control<any>;
    level: number;
}