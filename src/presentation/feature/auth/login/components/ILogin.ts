export interface StyledOTPInputProps {
    isError?: boolean;
}

export interface OtpFormProps {
    phoneNumber?: string;
    setStep?: React.Dispatch<React.SetStateAction<"phone" | "OTP">>;
}

export interface TimerProps {
    duration: number;
    setCanResend: (value: boolean) => void;
}