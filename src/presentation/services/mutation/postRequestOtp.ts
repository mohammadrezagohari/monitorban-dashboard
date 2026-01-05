import axiosApi from "@/presentation/api/axiosConfig";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/presentation/hooks/useToast";

export const requestOtp = (mobile: string) => {
    return axiosApi.post("/api/auth/request-otp", { mobile })
};

export const useRequestOtp = () => {
    const { showToast } = useToast();

    return useMutation({
        mutationFn: (mobile: string) => {
            console.log(mobile)
            return requestOtp(mobile)
        },
        onSuccess: () => {
            showToast("success", "کد با موفقیت ارسال شد")
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "خطا در ارسال کد. لطفا دوباره تلاش کنید"
            showToast("error", message)
        }
    })
}