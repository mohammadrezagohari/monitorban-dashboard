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
  // ...props
}) => {
  return (
    // <span
    //   id="bug"
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     gap: "8px",
    //     color: disabled ? "#5B5266" : "green",
    //   }}
    // >
    <StyledCheckbox
      checked={checked}
      // onChange={(e) => setChecked(e.target.checked)}
      checkedColor={checkedColor}
      uncheckedColor={uncheckedColor}
      disabled={disabled}
      icon={<UncheckedIcon disabled={disabled} color="#9B92A6" size={size} />}
      checkedIcon={
        <CheckedIcon disabled={disabled} color="#8C32D9" size={size} />
      }
      // {...props}
    />
    // </span>
  );
};

export default CustomCheckbox;
