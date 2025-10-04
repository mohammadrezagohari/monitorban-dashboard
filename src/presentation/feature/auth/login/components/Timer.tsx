import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { ClockIcon } from "src/presentation/assets/icons/ClockIcon";
import { formatTime } from "src/presentation/utils/helper";
import { StyledTimer } from "./Login.style";
import { TimerProps } from "./ILogin";

export function Timer({ duration, setCanResend }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setCanResend]);

  return (
    <StyledTimer>
      <ClockIcon size={24} />
      <Typography id="timer">{formatTime(timeLeft)}</Typography>
    </StyledTimer>
  );
}
