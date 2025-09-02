import { createContext, ReactNode, useContext, useState } from "react";
import { OperationsContextType } from "./IOperations";

const OperationsContext = createContext<OperationsContextType | null>(null);

export function Operations({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <OperationsContext.Provider value={{ openId, setOpenId }}>
      {children}
    </OperationsContext.Provider>
  );
}

export function useOperations() {
  const ctx = useContext(OperationsContext);
  if (!ctx) throw new Error("useOperations must be used within Operatios");

  return ctx;
}
