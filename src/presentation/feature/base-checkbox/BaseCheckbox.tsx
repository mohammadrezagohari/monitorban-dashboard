import { useState } from "react";
import { BaseCheckboxProps } from "./IBaseCheckbox";
import { StyledCheckbox } from "./BaseCheckbox.styles";

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  checkedColor,
  uncheckedColor,
  text,
  disabled,
  ...props
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: disabled ? "#5B5266" : "#F7F5FA",
      }}
    >
      <StyledCheckbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
        disabled={disabled}
        icon={<UncheckIcon disabled={disabled} />}
        checkedIcon={<CheckIcon disabled={disabled} />}
        {...props}
      />
      <span>{text}</span>
    </span>
  );
};

export default BaseCheckbox;

// TODO:: These icons should be moved to the icons folder

const UncheckIcon: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="4.5"
        stroke={disabled ? "#5B5266" : "#D5D0DB"}
      />
    </svg>
  );
};

const CheckIcon: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="5"
        fill={disabled ? "#5B5266" : "#8C32D9"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 7L9.375 16.625L5 12.25"
        fill={disabled ? "#5B5266" : "#8C32D9"}
      />
      <path
        d="M19 7L9.375 16.625L5 12.25"
        stroke="#F7F5FA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
