import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  type?: "primary" | "secondary";
}