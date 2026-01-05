import { Box } from "@mui/material";
import { useState } from "react";

import LogoMini from "@/presentation/components/common/logo/LogoMini";
import {
  LoginCaption,
  LoginHeader,
  StyledLoginFormContainer,
} from "./Login.style";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";

function LoginFormContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState<"phone" | "OTP">("phone");

  return (
    <StyledLoginFormContainer>
      <Box>
        <LogoMini />
        <LoginHeader component="h1">خوش آمدید</LoginHeader>
        <LoginCaption>ورود به سامانه مونیتورینگ اتاق سرور</LoginCaption>
        {step === "phone" ? (
          <LoginForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setStep={setStep}
          />
        ) : (
          <OtpForm setStep={setStep} phoneNumber={phoneNumber} />
        )}
      </Box>
    </StyledLoginFormContainer>
  );
}

export default LoginFormContainer;
