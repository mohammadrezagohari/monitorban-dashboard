import { Box, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import React from "react";
import { BaseSelectProps } from "./IBaseSelect";
import { StyledSelect } from "./BaseSelect.style";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

const BaseSelect: React.FC<BaseSelectProps> = ({
  options,
  value,
  label,
  placeholder,
  onChange,
  sx,
  ...rest
}) => {
  // const handleChange = (
  //   event: SelectChangeEvent<string>,
  //   _child: React.ReactNode
  // ) => {
  //   onChange(event.target.value);
  // };

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedTextColor = selectedOption?.color?.text || "#D5D0DB";
  const selectedBorderColor = selectedOption?.color?.border || "#5B5266";

  return (
    <Box>
      {label && (
        <Typography color="neutral.200" variant="body1" mb={1}>
          {label}
        </Typography>
      )}
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty
        sx={sx}
        selectedTextColor={selectedTextColor}
        selectedBorderColor={selectedBorderColor}
        IconComponent={ArrowDownIcon}
        {...rest}
      >
        {placeholder && (
          <MenuItem value="" sx={{ color: "#9B92A6" }}>
            {placeholder}
          </MenuItem>
        )}
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default BaseSelect;
