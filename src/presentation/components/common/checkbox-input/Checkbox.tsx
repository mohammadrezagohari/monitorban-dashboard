import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import { styled, Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";

function Checkbox({ size, ...props }) {
  return (
    <CheckboxInput
      icon={<UncheckedIcon size={size || 20} />}
      checkedIcon={<CheckedIcon size={size || 20} />}
      {...props}
    />
  );
}

export default Checkbox;

const CheckboxInput = styled(MuiCheckbox)(({ theme }) => ({}));
