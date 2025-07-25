export interface StepbarProps {
    steps: string[];
    activeStep: number;
    setActiveStep: (step: number) => void;
}

export type AccessTypeKey = "panels" | "sensors";