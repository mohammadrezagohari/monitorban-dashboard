import {
  CheckboxProps,
  Checkbox as MuiCheckbox,
  useTheme,
} from "@mui/material";
import React from "react";

import { Icon } from "../icons/components/Icon";

const Checkbox: React.FC<CheckboxProps & { iconSize: number }> = ({
  iconSize,
  ...props
}) => {
  const theme = useTheme();
  return (
    <MuiCheckbox
      icon={
        <Icon
          name="unchecked"
          w={iconSize}
          h={iconSize}
          color={theme.palette.neutral[300]}
        />
      }
      checkedIcon={
        <Icon
          name="checked"
          w={iconSize}
          h={iconSize}
          color={theme.palette.primary.main}
        />
      }
      {...props}
    />
  );
};

export default Checkbox;
