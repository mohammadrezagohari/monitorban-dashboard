export type OperationsContextType = {
    openId: string | null;
    setOpenId: (id: string | null) => void;
}