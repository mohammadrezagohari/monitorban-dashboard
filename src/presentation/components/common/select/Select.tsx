import { MenuItem } from "@mui/material";
import { SelectProps } from "./ISelect";
import { StyledSelect } from "./Select.styles";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";

function Select({
  options,
  value,
  placeholder,
  onChange,
  ...props
}: SelectProps) {
  return (
    <StyledSelect
      displayEmpty
      IconComponent={ArrowDownIcon}
      value={value}
      onChange={onChange}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
            bgcolor: "#373040",
            border: "1px solid #9B92A6",
            color: "neutral.main",
            borderRadius: "10px",
            direction: "rtl",
            li: {
              typography: "caption",
            },
          },
        },
      }}
      {...props}
    >
      {placeholder && (
        <MenuItem value="" sx={{ color: "text.disabled" }}>
          {placeholder}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
}

export default Select;
