import Button from "src/presentation/components/common/buttons/Button";
import Input from "src/presentation/components/common/input/Input";
import FormRow from "src/presentation/components/common/input/FormRow";
import { StyledLoginForm } from "./Login.style";

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
    setPhoneNumber(event.target[0].value);
    setStep("OTP");
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <FormRow label="برای شروع شماره موبایلت رو وارد کن">
        <Input
          id="phone"
          placeholder="مثال : 09353500145"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormRow>
      <Button
        variant="contained"
        size="large"
        colorType="primary"
        type="submit"
      >
        مرحله بعد - وارد کردن کد
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
