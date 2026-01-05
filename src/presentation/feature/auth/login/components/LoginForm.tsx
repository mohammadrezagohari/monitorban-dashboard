import Button from "@/presentation/components/common/buttons/Button";
import Input from "@/presentation/components/common/input/Input";
import FormRow from "@/presentation/components/common/input/FormRow";
import { StyledLoginForm } from "./Login.style";
import { useForm } from "react-hook-form";
import { MobileInput, mobileSchema } from "@/presentation/schemas/otpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRequestOtp } from "@/presentation/services/mutation/postRequestOtp";

const LoginForm = ({
  phoneNumber,
  setPhoneNumber,
  setStep,
}: {
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  setStep: (step: "phone" | "OTP") => void;
}) => {
  // const validatePhone = (value: string) => /^09\d{9}$/.test(value);

  // function handleSubmit(event: any) {
  //   event.preventDefault();
  //   if (!validatePhone(phoneNumber)) {
  //     // منطق خطای شماره تماس اشتباه
  //     console.log("error");
  //     return;
  //   }
  //   setPhoneNumber(event.target[0].value);
  //   setStep("OTP");
  // }
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<MobileInput>({
    resolver: zodResolver(mobileSchema),
    defaultValues: { mobile: "" },
  });

  const { mutate, isPending } = useRequestOtp();

  const submit = (data: MobileInput) => {
    setPhoneNumber(data.mobile);
    mutate(data.mobile, {
      onSuccess: () => {
        setStep("OTP");
      },
    });
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <FormRow
        label="برای شروع شماره موبایلت رو وارد کن"
        error={errors.mobile?.message}
      >
        <Input
          id="phone"
          placeholder="مثال : 09353500145"
          // value={phoneNumber}
          // onChange={(e) => {
          //   console.log(e.target.value);
          //   setPhoneNumber(e.target.value);
          // }}
          disabled={isPending}
          {...register("mobile")}
        />
      </FormRow>
      <Button
        variant="contained"
        size="large"
        colorType="primary"
        type="submit"
        disabled={isPending}
      >
        مرحله بعد - وارد کردن کد
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
