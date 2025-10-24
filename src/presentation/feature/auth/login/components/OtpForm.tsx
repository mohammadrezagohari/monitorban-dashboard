import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import Button from "src/presentation/components/common/buttons/Button";
import { Timer } from "./Timer";
import { EditIcon } from "src/presentation/assets/icons/EditIcon";
import { OtpFormProps } from "./ILogin";
import { CloseCircleIcon } from "src/presentation/assets/icons/CloseCircleIcon";
import {
  ButtonContainer,
  ErrorBox,
  StyledOTPContainer,
  StyledOTPInput,
  StyledOTPInputsContainer,
} from "./Login.style";

const OTP_LENGHT = 5;
const OTP_CODE = "11111";
const RESEND_TIMEOUT = 120;

const OtpForm = ({ phoneNumber, setStep }: OtpFormProps) => {
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGHT).fill("")
  );
  const [canResend, setCanResend] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();


  const handleChange = (value: string, index: number) => {
    // Validate OTP input
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    // remove error style
    if (isError && value === "") {
      setIsError(false);
    }

    // focus to next field
    if (value && index < OTP_LENGHT - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // submit when all fields complete
    const isComplete = newOtp.every((digit) => digit !== "");
    if (isComplete) {
      handleSubmitCode(newOtp.join(""));
    }
  };

  const handleSubmitCode = (code: string) => {
    if (code !== OTP_CODE) {
      setIsError(true);
      return;
    }

    setIsError(false);
    alert("Success!");
    navigate("/dashboard");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(paste)) return;

    const pasteArray = paste.split("").slice(0, OTP_LENGHT);
    const newOtp = [...otpValues];

    pasteArray.forEach((char, index) => {
      newOtp[index] = char;
      inputsRef.current[index]?.focus();
    });

    setOtpValues(newOtp);
  };

  const handleEdit = () => {
    if (setStep) {
      setStep("phone"); // TODO::check i think it has problems
    }
  };

  const handleResend = () => {
    //TODO: call resend API here
    // setTimeLeft(RESEND_TIMEOUT);
    setCanResend(false);
    setIsError(false);
    setOtpValues(Array(OTP_LENGHT).fill(""));
    inputsRef.current[0]?.focus();
  };

  return (
    <StyledOTPContainer>
      <Typography id="helper-text">
        کد تایید 5 رقمی ارسال شده به شماره زیر را وارد نمایید.
      </Typography>

      <Typography id="phone">{phoneNumber}</Typography>

      <StyledOTPInputsContainer>
        {otpValues.map((digit, i) => (
          <StyledOTPInput
            isError={isError}
            key={i}
            value={digit}
            disabled={canResend}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) =>
              handleKeyDown(e as React.KeyboardEvent<HTMLInputElement>, i)
            }
            onPaste={handlePaste}
            inputRef={(ref) => (inputsRef.current[i] = ref)}
          />
        ))}
      </StyledOTPInputsContainer>

      {isError && (
        <ErrorBox>
          <CloseCircleIcon id="error-icon" size={20} />
          <Typography id="error-text">کد وارد شده صحیح نمی باشد.</Typography>
        </ErrorBox>
      )}
      {canResend ? (
        <Button
          variant="contained"
          size="large"
          colorType="primary"
          onClick={handleResend}
        >
          ارسال مجدد کد
        </Button>
      ) : (
        // <Box
        //   sx={{
        //     bgcolor: "primary.main",
        //     padding: "12px 24px",
        //     borderRadius: "10px",
        //     display: "flex",
        //     alignItems: "center",
        //     gap: 1,
        //     justifyContent: "center",
        //   }}
        // >
        //   <ClockIcon size={24} />
        //   <Typography
        //     sx={{
        //       fontSize: 16,
        //       fontWeight: 600,
        //     }}
        //   >
        //     {formatTime(timeLeft)}
        //   </Typography>
        // </Box>
        <Timer duration={RESEND_TIMEOUT} setCanResend={setCanResend} />
      )}
      <ButtonContainer>
        <Button
          variant="text"
          size="xsmall"
          colorType="primary"
          onClick={handleEdit}
          startIcon={<EditIcon />}
        >
          ویرایش شماره
        </Button>
      </ButtonContainer>
    </StyledOTPContainer>
  );
};

export default OtpForm;
