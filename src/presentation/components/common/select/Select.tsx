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
