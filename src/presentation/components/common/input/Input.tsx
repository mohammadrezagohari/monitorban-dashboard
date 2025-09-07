import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";

import { StyledInput } from "./Form.styles";
import { HiddenEyeIcon } from "src/presentation/assets/icons/HiddenEyeIcon";
import { VisibleEyeIcon } from "src/presentation/assets/icons/VisibleEyeIcon";
import { InputProps } from "./IForm";

function Input({ id, icon, type = "text", placeholder, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInput
      placeholder={placeholder}
      // autf
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
