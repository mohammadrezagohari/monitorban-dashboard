import { FormControlLabel } from "@mui/material";
import CustomRadio from "src/presentation/components/common/radio-input/CustomRadioInput";
import { RadioInputProps } from "src/presentation/components/common/radio-input/IRadioInput";

const RadioInput: React.FC<RadioInputProps> = ({ option, selectedValue }) => {
  return (
    <FormControlLabel
      key={option.value}
      value={option.value}
      control={<CustomRadio />}
      label={option.label}
      disabled={option.disabled}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "0.875rem",
          color: selectedValue === option.value ? "#F7F5FA" : "#B7B0BF",
          fontWeight: 600,
        },
        "&.Mui-disabled": {
          "& .MuiFormControlLabel-label": {
            color: "#5B5266",
          },
        },
      }}
    />
  );
};

export default RadioInput;
