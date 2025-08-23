import { MenuItem, useTheme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <StyledSelect
      displayEmpty
      IconComponent={ArrowDownIcon}
      value={value}
      onChange={onChange}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: theme.palette.neutral[600],
            borderRadius: "15px",
            border: `1px solid ${theme.palette.neutral[300]}`,
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
