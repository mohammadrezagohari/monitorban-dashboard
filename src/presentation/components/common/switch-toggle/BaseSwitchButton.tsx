import React, { useState } from "react";
import { Typography } from "@mui/material";
import { SwitchButtonProps } from "./ISwitchButton";
import StyledSwitchButton from "./BaseSwitchButton.styles";

const BaseSwitchButton: React.FC<SwitchButtonProps> = ({ disabled, title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <StyledSwitchButton
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={checked ? "checked" : ""}
        disabled={disabled}
      />
      <Typography
        variant="body1"
        sx={{
          color: checked ? "neutral.50" : "neutral.200",
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default BaseSwitchButton;
