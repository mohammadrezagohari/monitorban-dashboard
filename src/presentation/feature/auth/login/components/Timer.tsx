import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Icon } from "@/presentation/components/common/icons/components/Icon";
import { formatTime } from "@/presentation/utils/helper";
import { TimerProps } from "./ILogin";
import { StyledTimer } from "./Login.style";

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
      <Icon name="certificateClock" />
      <Typography id="timer">{formatTime(timeLeft)}</Typography>
    </StyledTimer>
  );
}
