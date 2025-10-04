import { useState } from "react";
import { Box, Typography } from "@mui/material";

import OtpForm from "./OtpForm";
import LogoMini from "src/presentation/components/common/logo/LogoMini";
import LoginForm from "./LoginForm";
import {
  LoginCaption,
  LoginHeader,
  StyledLoginFormContainer,
} from "./Login.style";

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
