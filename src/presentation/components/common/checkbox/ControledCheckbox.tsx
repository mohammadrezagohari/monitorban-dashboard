import { CheckboxProps } from "@mui/material";
import { Controller } from "react-hook-form";

import Checkbox from "./Checkbox";
import { StyledControledCheckbox } from "./Checkbox.styles";
import { ControledCheckboxProps } from "./ICheckbox";

const ControledCheckbox = ({
  label,
  name,
  itemValue,
  control,
  size = 20,
  fontSize = 16,
  ...props
}: ControledCheckboxProps & Omit<CheckboxProps, "size">) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState }) => {
        const isChecked = value.includes(itemValue);
        const toggle = (_: any, val: boolean) => {
          onChange(
            val
              ? [...value, itemValue]
              : value.filter((v: string) => v !== itemValue)
          );
        };

        return (
          <StyledControledCheckbox
            label={label}
            fontSize={fontSize}
            control={
              <Checkbox
                iconSize={size}
                checked={Boolean(isChecked)}
                onChange={toggle}
                // {...fieldState}
                {...props}
              />
            }
          />
        );
      }}
    />
  );
};

export default ControledCheckbox;
