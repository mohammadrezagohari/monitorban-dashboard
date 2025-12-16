import axiosApi from "src/presentation/api/axiosConfig";
import { useMutation } from "@tanstack/react-query";

export const requestOtp = (mobile: string) => {
    return axiosApi.post("/api/auth/request-otp", { mobile })
};

export const useRequestOtp = () => {
    return useMutation({
        mutationFn: (mobile: string) => {
            console.log(mobile)
            return requestOtp(mobile)
        },
        onSuccess: () => {
            alert("کد با موفقیت ارسال شد")
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "خطا در ارسال کد. لطفا دوباره تلاش کنید"
            alert(message)
        }
    })
}