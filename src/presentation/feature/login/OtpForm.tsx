import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { StyledOTPContainer, StyledOTPInput } from "./OtpForm.style";
import ButtonPrimaryLargeFilled from "../buttons/ButtonPrimaryLargeFilled";
import { CloseCircleIcon } from "src/presentation/components/common/icons/CloseCircleIcon";

const OTP_LENGHT = 5;

const OtpForm = ({ phoneNumber }) => {
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGHT).fill("")
  );
  const [isError, setIsError] = useState(true);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < OTP_LENGHT - 1) {
      inputsRef.current[index + 1]?.focus();
    }
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
            key={i}
            value={digit}
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
      <ButtonPrimaryLargeFilled>ارسال مجدد کد</ButtonPrimaryLargeFilled>
    </StyledOTPContainer>
  );
};

export default OtpForm;
