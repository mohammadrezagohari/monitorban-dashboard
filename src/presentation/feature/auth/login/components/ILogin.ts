export interface StyledOTPInputProps {
    theme?: any;
    isError?: boolean;
}

export interface IOtpForm {
    phoneNumber?: string;
    setStep?: React.Dispatch<React.SetStateAction<"phone" | "OTP">>;
}