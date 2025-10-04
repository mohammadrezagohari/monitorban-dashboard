import CustomRadio from "src/presentation/components/common/radio-input/CustomRadioInput";
import { RadioInputProps } from "src/presentation/components/common/radio-input/IRadioInput";
import { StyledRadioInput } from "./RadioInput.styles";

const RadioInput: React.FC<RadioInputProps> = ({ option }) => {
  return (
    <StyledRadioInput
      key={option.value}
      value={option.value}
      control={<CustomRadio />}
      label={option.label}
      disabled={option.disabled}
    />
  );
};

export default RadioInput;
