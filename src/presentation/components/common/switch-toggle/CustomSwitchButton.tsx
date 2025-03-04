import React, { useState } from "react";
import SwitchButtonStyles from "./switchButton.styles";
import { SwitchButtonProps } from "./ISwitchButton";

const CustomSwitchButton: React.FC<SwitchButtonProps> = ({
  disabled,
  title,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 16,
        fontWeight: 600,
        color: checked ? "#F7F5FA" : "#B7B0BF",
      }}
    >
      <SwitchButtonStyles
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={checked ? "checked" : ""}
        disabled={disabled}
      />
      <p>{title}</p>
    </div>
  );
};

export default CustomSwitchButton;
