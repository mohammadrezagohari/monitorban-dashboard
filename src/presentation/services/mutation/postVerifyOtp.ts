import axiosApi from "src/presentation/api/axiosConfig";
import { setToLocalStorage } from "src/presentation/utils/utils";
import { useMutation } from "@tanstack/react-query";

interface VerifyOtpRequestType {
    mobile: string;
    otp: number;
}

export const verifyOtp = (mobile: string, otp: number) => {
    return axiosApi.post("/api/auth/verify-otp", { mobile, otp })
};

export const useVerifyOtp = () => {
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
            alert(message)
        }
    })
}