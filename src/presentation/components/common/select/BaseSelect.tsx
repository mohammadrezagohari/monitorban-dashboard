import { MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import { BaseSelectProps } from "./IBaseSelect";
import { StyledSelect } from "./BaseSelect.style";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

const BaseSelect: React.FC<BaseSelectProps> = ({
  options,
  value,
  onChange,
  sx,
  ...rest
}) => {
  const handleChange = (
    event: SelectChangeEvent<string>,
    _child: React.ReactNode
  ) => {
    onChange(event.target.value);
  };

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedTextColor = selectedOption?.color.text || "#B7B0BF";
  const selectedBorderColor = selectedOption?.color.border || "#7F6A95";

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      displayEmpty
      selectedTextColor={selectedTextColor}
      selectedBorderColor={selectedBorderColor}
      IconComponent={ArrowDownIcon}
      {...rest}
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default BaseSelect;
