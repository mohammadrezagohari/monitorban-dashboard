import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import {
  styled,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormGroup,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";
import { Control, Controller } from "react-hook-form";
import Checkbox from "./Checkbox";

type Option = {
  value: string;
  label: string;
};

type Props<T> = {
  name: keyof T;
  control: Control<T>;
  options: Option[];
};

function Checkbox2<T extends Record<string, any>>({
  name,
  control,
  options,
}: Props<T>) {
  const theme = useTheme();

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field }) => {
        const value: string[] = field.value || [];
        const handleChange = (optionValue: string) => {
          const newValue = value.includes(optionValue)
            ? value.filter((v) => v !== optionValue)
            : [...value, optionValue];
          field.onChange(newValue);
        };

        return (
          <FormGroup>
            {options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                sx={{ color: theme.palette.neutral.main }}
                control={
                  <Checkbox
                    checked={value.includes(opt.value)}
                    onChange={() => handleChange(opt.value)}
                  />
                }
                label={opt.label}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}

export default Checkbox2;

const CheckboxInput = styled(MuiCheckbox)(({ theme }) => ({}));
