import { ReactNode, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";

import { StyledInput } from "./Form.styles";
import { HiddenEyeIcon } from "src/presentation/assets/icons/HiddenEyeIcon";
import { VisibleEyeIcon } from "src/presentation/assets/icons/VisibleEyeIcon";

function Input({
  id,
  icon,
  type = "text",
  ...props
}: {
  id: string;
  icon?: boolean | ReactNode;
  type?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInput
      id={id}
      {...props}
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      endAdornment={
        <InputAdornment position="end">
          {type === "password" ? (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {icon && type === "password" && showPassword ? (
                <VisibleEyeIcon />
              ) : (
                <HiddenEyeIcon />
              )}
            </IconButton>
          ) : (
            icon
          )}
        </InputAdornment>
      }
    />
  );
}

export default Input;
