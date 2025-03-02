import CustomCheckBox from "src/presentation/components/common/checkbox-input/CustomCheckBoxInput";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import { CheckBoxInputProps } from "./ICheckBoxInput";
import { useState } from "react";
import { FormControlLabelStyled } from "./CheckboxInput.styles";

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ options, label }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setSelectedValues((prevValue) =>
      prevValue.includes(value)
        ? prevValue.filter((val) => val !== value)
        : [...prevValue, value]
    );
  };
  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup>
        {options.map((option) => (
          <FormControlLabelStyled
            key={option.value}
            control={
              <CustomCheckBox
                checked={selectedValues.includes(option.value)}
                onChange={() => handleChange(option.value)}
                disabled={option.disabled}
              />
            }
            label={option.label}
            selected={selectedValues.includes(option.value)}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckBoxInput;
