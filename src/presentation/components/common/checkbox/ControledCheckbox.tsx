import { CheckboxProps, FormControlLabel, styled } from "@mui/material";
import { Control, Controller } from "react-hook-form";

import Checkbox from "./Checkbox";

export const StyledCheckbox = styled(FormControlLabel)<{ fontSize: number }>(
  ({ theme, fontSize }) => {
    return {
      color: theme.palette.neutral[200],
      margin: 0,
      "& .MuiFormControlLabel-label": {
        transition: "color ease 0.3s",
        fontSize: fontSize,
      },
      "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
        color: theme.palette.neutral.main,
      },
    };
  }
);

const ControledCheckbox = ({
  label,
  name,
  itemValue,
  control,
  size = 20,
  fontSize = 16,
  ...props
}: {
  label?: string;
  name: string;
  itemValue: string;
  control: Control<any>;
  size?: number;
  fontSize?: number;
} & Omit<CheckboxProps, "size">) => {
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
          <StyledCheckbox
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
