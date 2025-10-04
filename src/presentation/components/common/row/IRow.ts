import { ReactElement, ReactNode } from "react";

export interface RowProps {
    type?: "flex" | "grid" | "block";
    children: ReactNode;
}
