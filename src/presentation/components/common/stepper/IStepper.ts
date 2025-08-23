export type FormValues = {
    accessTypes: {
        panels: boolean;
        sensors: boolean;
    };
    serverRooms: Record<string, boolean>;
    sensors: string[];
};