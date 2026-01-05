import axiosApi from "@/presentation/api/axiosConfig";
import { setToLocalStorage } from "@/presentation/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/presentation/hooks/useToast";

interface VerifyOtpRequestType {
    mobile: string;
    otp: number;
}

export const verifyOtp = (mobile: string, otp: number) => {
    return axiosApi.post("/api/auth/verify-otp", { mobile, otp })
};

export const useVerifyOtp = () => {
    const { showToast } = useToast()
    return useMutation({
        mutationFn: ({ mobile, otp }: VerifyOtpRequestType) => verifyOtp(mobile, otp),
        onSuccess: (response) => {
            const token = response.data?.access_token;
            const refreshToken = response.data.refresh_token;

            if (token) {
                setToLocalStorage("access_token", token)
                setToLocalStorage("refresh_token", refreshToken)
                window.location.href = "/dashboard"
            }
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "کد وارد شده اشتباه است یا منقضی شده است"
            showToast("error", message)
        }
    })
}