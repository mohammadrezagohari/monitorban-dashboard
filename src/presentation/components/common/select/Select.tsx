import { MenuItem, useTheme } from "@mui/material";
import ArrowDown from "../icons/ArrowDown";
import { SelectProps } from "./ISelect";
import { StyledSelect } from "./Select.styles";

const SelectIcon = () => <ArrowDown w={16} h={16} />;

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
      IconComponent={SelectIcon}
      value={value}
      onChange={onChange}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
            bgcolor: theme.palette.neutral[600],
            border: `1px solid ${theme.palette.neutral[600]}`,
            color: "neutral.main",
            borderRadius: "10px",
            direction: "rtl",
            li: {
              typography: "caption",
            },

            "&::-webkit-scrollbar": {
              display: "none",
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
