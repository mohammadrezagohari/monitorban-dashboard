export interface StyledOTPInputProps {
    isError?: boolean;
}

export interface IOtpForm {
    phoneNumber?: string;
    setStep?: React.Dispatch<React.SetStateAction<"phone" | "OTP">>;
}