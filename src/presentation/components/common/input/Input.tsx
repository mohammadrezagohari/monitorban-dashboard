import { ReactNode, useState } from "react";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";

import { StyledInput } from "./Form.styles";
import { HiddenEyeIcon } from "src/presentation/assets/icons/HiddenEyeIcon";
import { VisibleEyeIcon } from "src/presentation/assets/icons/VisibleEyeIcon";

interface InputProps extends TextFieldProps {
  id: string;
  placeholder?: string;
  icon?: boolean | ReactNode;
  type?: string;
}

function Input({
  id,
  icon,
  type = "text",
  placeholder,
  ...props
}: {
  id: string;
  placeholder?: string;
  icon?: boolean | ReactNode;
  type?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInput
      placeholder={placeholder}
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
