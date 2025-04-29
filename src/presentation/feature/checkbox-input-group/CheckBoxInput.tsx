import CustomCheckBox from "src/presentation/components/common/checkbox-input/CustomCheckBoxInput";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import { CheckBoxInputProps } from "./ICheckBoxInput";
import { useState } from "react";
import { FormControlLabelStyled } from "./CheckboxInput.styles";

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
  options,
  label,
  selectedValues,
  onChange,
}) => {
  // const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (value: string) => {
    // setSelectedValues((prevValue) =>
    //   prevValue.includes(value)
    //     ? prevValue.filter((val) => val !== value)
    //     : [...prevValue, value]
    // );
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((val) => val !== value)
      : [...selectedValues, value];

    onChange(newValues);
  };
  return (
    <FormControl component="fieldset">
      {label && (
        <FormLabel
          component="legend"
          sx={{
            color: "neutral.100",
            "&.Mui-focused": { color: "neutral.100" },
          }}
        >
          {label}
        </FormLabel>
      )}
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
