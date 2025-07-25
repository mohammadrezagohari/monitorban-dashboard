import { useState } from "react";
import { Box, Typography } from "@mui/material";

import OtpForm from "./OtpForm";
import LogoMini from "src/presentation/components/common/logo/LogoMini";
import LoginForm from "./LoginForm";
import { StyledLoginFormContainer } from "./Login.style";

function LoginFormContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState<"phone" | "OTP">("phone");

  return (
    <StyledLoginFormContainer>
      <Box maxWidth={350}>
        <LogoMini />
        <Typography fontSize={32} fontWeight={700}>
          خوش آمدید
        </Typography>
        <Typography
          fontFamily="Dana-ExtraLight"
          fontSize={20}
          fontWeight={200}
          marginBottom={3}
        >
          ورود به سامانه مونیتورینگ اتاق سرور
        </Typography>
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
