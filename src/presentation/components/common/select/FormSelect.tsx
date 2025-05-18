import { SelectChangeEvent } from "@mui/material";
import BaseSelect from "./BaseSelect";

const FormSelect = ({
  options,
  value,
  label,
  placeholder,
  onChange,
}: {
  value: string;
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  onChange: (event: SelectChangeEvent) => void;
}) => {
  return (
    <BaseSelect
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      options={options}
      sx={{
        typography: "body2",
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "15px",
        },
        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
          paddingRight: "16px",
          paddingBlock: "12px",
          display: "flex",
          alignItems: "center",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            // maxHeight: 200,
            bgcolor: "#373040",
            border: "1px solid #9B92A6",
            color: "neutral.main",
            borderRadius: "10px",
            direction: "rtl",
            li: {
              typography: "body2",
            },
          },
        },
      }}
    />
  );
};

export default FormSelect;
