import { FormControl } from "@mui/material";

import BaseInput from "src/presentation/components/common/input/BaseInput";
import Button from "src/presentation/components/common/buttons/Button";

const LoginForm = ({
  phoneNumber,
  setPhoneNumber,
  setStep,
}: {
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  setStep: (step: "phone" | "OTP") => void;
}) => {
  const validatePhone = (value: string) => /^09\d{9}$/.test(value);

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!validatePhone(phoneNumber)) {
      // منطق خطای شماره تماس اشتباه
      console.log("error");
      return;
    }
    // console.log(event);
    setPhoneNumber(event.target[0].value);
    setStep("OTP");
    // console.log(phoneNumber);
  }

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <BaseInput
        label="برای شروع شماره موبایلت رو وارد کن"
        placeholder="مثال : 09353500145"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {/* TODO:: چطور میتونم تایپ باتن رو تعریف کنم؟ */}
      <Button
        variant="contained"
        size="large"
        colorType="primary"
        // type="submit"
      >
        مرحله بعد - وارد کردن کد
      </Button>
    </FormControl>
  );
};

export default LoginForm;
