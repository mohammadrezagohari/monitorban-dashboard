import { FormControl } from "@mui/material";
import BaseInput from "../input/BaseInput";
import ButtonPrimaryLargeFilled from "../buttons/ButtonPrimaryLargeFilled";
// interface LoginFormProps {
//   phoneNumber: string;
// setPhoneNumber: (phone: string) => void;
//   setStep: (step: string) => void;
// }

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
    console.log(event);
    setPhoneNumber(event.target[0].value);
    setStep("OTP");
    console.log(phoneNumber);
  }

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <BaseInput
        label="برای شروع شماره موبایلت رو وارد کن"
        placeholder="مثال : 09353500145"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {/* <ButtonCustom variant="contained">مرحله بعد - وارد کردن کد</ButtonCustom> */}
      <ButtonPrimaryLargeFilled type="submit">
        مرحله بعد - وارد کردن کد
      </ButtonPrimaryLargeFilled>
    </FormControl>
  );
};

export default LoginForm;
