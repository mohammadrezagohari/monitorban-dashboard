import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";
import {
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  styled,
} from "@mui/material";
// import { CheckedIcon } from "../../assets/icons/CheckedIcon";
// import { UncheckedIcon } from "../../assets/icons/UncheckedIcon";
import { Control, Controller, useForm } from "react-hook-form";

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
              icon={<UncheckedIcon size={size} />}
              checkedIcon={<CheckedIcon size={size} />}
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
