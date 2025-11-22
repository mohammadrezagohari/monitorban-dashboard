import z from "zod";

export const mobileSchema = z.object({
    mobile: z.string().regex(/^09[0-9]{9}$/, "شماره موبایل باید با 11 رقم و با 09 شروع بشه")
})

export const otpSchema = z.object({
    otp: z.string().length(6, "کد باید 6 رقم باشد").regex(/^\d+$/, "فقط عدد مجاز هست")
})

export type MobileInput = z.infer<typeof mobileSchema>
export type OtpInput = z.infer<typeof otpSchema>