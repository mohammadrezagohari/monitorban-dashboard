import {
  CheckboxProps,
  // FormControlLabel,
  Checkbox as MuiCheckbox,
  styled,
} from "@mui/material";
import React from "react";
import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";

export const StyledCheckbox = styled(MuiCheckbox)<{ fontSize: number }>(
  ({ theme, fontSize }) => {
    return {
      color: theme.palette.neutral[200],
      "& .MuiFormControlLabel-label": {
        transition: "color ease 0.3s",
        fontSize: fontSize,
      },
      "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
        color: theme.palette.neutral.main,
      },
      // "&:hover .MuiFormControlLabel-label": {
      //   color: theme.palette.neutral.main,
      // },
      // "&:hover .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
      //   color: theme.palette.neutral.main,
      // },
    };
  }
);

// const Checkbox = ({
//   label,
// size = 20,
// fontSize = 16,
//   ...props
// }: {
//   label?: string;
//   size?: number;
//   fontSize?: number;
// } & Omit<CheckboxProps, "size">) => {

// const Checkbox: React.FC<CheckboxProps & { size?: number }> = ({
const Checkbox: React.FC<CheckboxProps & { iconSize: number }> = ({
  iconSize,
  ...props
}) => {
  return (
    // <StyledCheckbox
    //   label={label}
    //   fontSize={fontSize}
    //   control={
    <MuiCheckbox
      icon={<UncheckedIcon size={iconSize} />}
      checkedIcon={<CheckedIcon size={iconSize} />}
      {...props}
    />
    // }
    // />
  );
};

export default Checkbox;
