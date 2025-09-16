import React from "react";
import { CheckboxProps, Checkbox as MuiCheckbox } from "@mui/material";

import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";

const Checkbox: React.FC<CheckboxProps & { iconSize: number }> = ({
  iconSize,
  ...props
}) => {
  return (
    <MuiCheckbox
      icon={<UncheckedIcon size={iconSize} />}
      checkedIcon={<CheckedIcon size={iconSize} />}
      {...props}
    />
  );
};

export default Checkbox;
