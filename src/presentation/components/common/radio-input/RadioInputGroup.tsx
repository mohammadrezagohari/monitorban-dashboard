import RadioInput from "src/presentation/feature/radio-input/RadioInput";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { useState } from "react";
import { RadioInputGroupProps } from "./IRadioInput";

const RadioInputGroup: React.FC<RadioInputGroupProps> = ({
  options,
  label,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <FormControl>
      {label && (
        <FormLabel id="Sample1" sx={{ color: "#F7F5FA" }}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        aria-labelledby="Sample1"
        name="First Sample"
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <RadioInput
            option={option}
            selectedValue={selectedValue}
            key={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInputGroup;
