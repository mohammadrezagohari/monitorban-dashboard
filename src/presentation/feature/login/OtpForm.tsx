import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { StyledOTPContainer, StyledOTPInput } from "./OtpForm.style";
import ButtonPrimaryLargeFilled from "../buttons/ButtonPrimaryLargeFilled";
import { CloseCircleIcon } from "src/presentation/components/common/icons/CloseCircleIcon";
import ButtonPrimaryXsmallText from "../buttons/ButtonPrimaryXsmallText";
import { EditIcon } from "src/presentation/components/common/icons/EditIcon";
import { ClockIcon } from "src/presentation/components/common/icons/ClockIcon";
import { useNavigate } from "react-router-dom";

const OTP_LENGHT = 5;
const OTP_CODE = "11111";
const RESEND_TIMEOUT = 120;

const OtpForm = ({ phoneNumber, setStep }) => {
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGHT).fill("")
  );
  const [timeLeft, setTimeLeft] = useState(RESEND_TIMEOUT);
  const [canResend, setCanResend] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (second: number) => {
    const m = Math.floor(second / 60)
      .toString()
      .padStart(1, "0");
    const s = (second % 60).toString().padStart(2, "0");

    return `${Number(m) > 9 ? m : "0" + m}:${s}`;
  };

  const handleChange = (value: string, index: number) => {
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
    navigate("/test/dashboard");
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
    setStep("phone");
  };

  const handleResend = () => {
    //TODO: call resend API here
    setTimeLeft(RESEND_TIMEOUT);
    setCanResend(false);
    setOtpValues(Array(OTP_LENGHT).fill(""));
    inputsRef.current[0]?.focus();
  };

  return (
    <StyledOTPContainer>
      <Typography
        color="neutral.100"
        fontSize={16}
        fontWeight={400}
        marginBottom={2}
      >
        کد تایید 5 رقمی ارسال شده به شماره زیر را وارد نمایید.
      </Typography>
      <Typography
        color="neutral.main"
        sx={{ marginBlock: "1rem", fontSize: 24, fontWeight: 400 }}
      >
        {phoneNumber}
      </Typography>
      <Box
        display="flex"
        flexDirection="row-reverse"
        justifyContent="flex-end"
        gap={2}
        marginBottom={3}
      >
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
      </Box>
      {isError && (
        <Box display="flex" alignItems="center" gap={1} marginBottom={3}>
          <CloseCircleIcon size={20} color="#E8383B" />
          <Typography color="error.main" fontSize={16} fontWeight={400}>
            کد وارد شده صحیح نمی باشد.
          </Typography>
        </Box>
      )}
      {canResend ? (
        <ButtonPrimaryLargeFilled onClick={handleResend}>
          ارسال مجدد کد
        </ButtonPrimaryLargeFilled>
      ) : (
        <Box
          sx={{
            bgcolor: "primary.main",
            padding: "12px 24px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <ClockIcon size={24} />
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {formatTime(timeLeft)}
          </Typography>
        </Box>
      )}
      <div style={{ margin: "1rem auto 0", textAlign: "center" }}>
        <ButtonPrimaryXsmallText onClick={handleEdit} rightIcon={<EditIcon />}>
          ویرایش شماره
        </ButtonPrimaryXsmallText>
      </div>
    </StyledOTPContainer>
  );
};

export default OtpForm;
