import { StyledCheckbox } from "src/presentation/feature/old/base-checkbox/BaseCheckbox.styles";
import { BaseCheckboxProps } from "src/presentation/feature/old/base-checkbox/IBaseCheckbox";
import { UncheckedIcon } from "../../../assets/icons/UncheckedIcon";
import { CheckedIcon } from "../../../assets/icons/CheckedIcon";

const CustomCheckbox: React.FC<BaseCheckboxProps> = ({
  checkedColor,
  uncheckedColor,
  checked,
  disabled,
  size,
  ...props
}) => {
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
        // onChange={(e) => setChecked(e.target.checked)}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
        disabled={disabled}
        icon={<UncheckedIcon disabled={disabled} color="#D5D0DB" size={size} />}
        checkedIcon={
          <CheckedIcon disabled={disabled} color="#8C32D9" size={size} />
        }
        {...props}
      />
    </span>
  );
};

export default CustomCheckbox;
