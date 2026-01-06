import { InputAdornment } from "@mui/material";
import { useState } from "react";

import { Icon } from "../icons/components/Icon";
import { StyledInput } from "./Form.styles";
import { InputProps } from "./IForm";
import IconButton from "../icon-button/IconButton";

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
            <Icon
              name={
                icon && type === "password" && showPassword ? "eye" : "eyeSlash"
              }
              onClick={() => setShowPassword(!showPassword)}
              className="pointer"
            />
          ) : (
            icon && <Icon name={icon} />
          )}
          {/* {icon && type === "password" && showPassword ? (
                <Icon name="eye" />
              ) : (
                <Icon name="eyeSlash" />
              )}
            </IconButton> */}
        </InputAdornment>
      }
    />
  );
}

export default Input;
