import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { SelectProps } from "./ISelect";
import { MenuItem } from "@mui/material";
import { StyledAdvancedFilterSelect } from "./AdvancedFilterSelect.styles";

export default function AdvancedFilterSelect({
  options,
  value,
  onChange,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <StyledAdvancedFilterSelect
      displayEmpty
      IconComponent={ArrowDownIcon}
      value={value}
      onChange={onChange}
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
      {...props}
    >
      {placeholder && (
        <MenuItem value="" sx={{ color: "text.disabled" }}>
          {placeholder}
        </MenuItem>
      )}
      {options === undefined && null}
      {options.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledAdvancedFilterSelect>
  );
}
