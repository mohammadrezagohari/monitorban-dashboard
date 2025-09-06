import { FormControl } from "@mui/material";
import { useState } from "react";
import { RadioInputGroupProps } from "./IRadioInput";
import RadioInput from "src/presentation/components/common/radio-input/RadioInput";
import { StyledRadioGroup } from "./RadioInputGroup.styles";

const RadioInputGroup: React.FC<RadioInputGroupProps> = ({
  options,
  row = false,
  name,
  // defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("video");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    //  console.log(state);
  };
  return (
    <FormControl>
      <StyledRadioGroup
        id="radio-group"
        row={row}
        aria-labelledby={name}
        name={name}
        // defaultValue={defaultValue}
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
      </StyledRadioGroup>
    </FormControl>
  );
};

export default RadioInputGroup;
