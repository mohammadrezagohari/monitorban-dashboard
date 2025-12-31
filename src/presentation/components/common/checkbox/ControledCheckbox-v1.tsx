import {
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  styled,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { Icon } from "../icons/components/Icon";

export const StyledCheckbox = styled(FormControlLabel)<{ fontSize: number }>(
  ({ theme, fontSize }) => {
    return {
      color: "#ccc",
      // backgroundColor: "orange",
      "& .MuiFormControlLabel-label": {
        transition: "color ease 0.3s",
        fontSize: fontSize,
      },
      "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
        color: "black",
      },
      "&:hover .MuiFormControlLabel-label": {
        color: "#fff",
      },
      "&:hover .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
        color: "#fff",
      },
    };
  }
);

const ControledCheckbox = ({
  label,
  name,
  control,
  size = 20,
  fontSize = 16,
  ...props
}: {
  label?: string;
  name: string;
  control: Control<any>;
  size?: number;
  fontSize?: number;
} & Omit<CheckboxProps, "size">) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledCheckbox
          label={label}
          fontSize={fontSize}
          control={
            <MuiCheckbox
              icon={<Icon name="unchecked" w={size} h={size} />}
              checkedIcon={<Icon name="checked" w={size} h={size} />}
              {...field}
              checked={Boolean(field.value)}
              onChange={(_e, checked) => field.onChange(checked)}
              {...props}
            />
          }
        />
      )}
    />
  );
};

export default ControledCheckbox;
