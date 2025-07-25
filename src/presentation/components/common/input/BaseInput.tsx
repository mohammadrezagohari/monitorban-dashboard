import { useState } from "react";
import { Box, InputAdornment, Typography, useTheme } from "@mui/material";

import { BaseInputProps } from "./IBaseInput";
import { StyledLabel, StyledTextField } from "./BaseInput.styles";

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  placeholder,
  caption,
  status = "default",
  type = "text",
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  // const [type, setType] = useState(props.type);
  const theme = useTheme();

  const isPassword = type === "password";

  return (
    <Box>
      {label && <StyledLabel variant="body1">{label}</StyledLabel>}
      <StyledTextField
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => {
                  if (props.secondaryIcon) {
                    setVisible(!visible);
                  }
                }}
                sx={{
                  cursor: "pointer",
                  m: 0,
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {!visible ? props.primaryIcon : props.secondaryIcon}
              </InputAdornment>
            ),
            sx: {
              bgcolor: theme.palette.neutral[700],
              borderRadius: "15px",
              width: "100%",
              typography: "body2",
              padding: 0,
              "& input": {
                boxSizing: "inherit",
                padding: "12px 16px",
                width: "100%",
                height: "100%",
              },
            },
          },
        }}
        status={status}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        // helperText={caption || null}
        placeholder={placeholder}
        type={isPassword ? (visible ? "text" : "password") : type}
        // type="password"
        {...props}
      />
      {caption && <Typography variant="caption">{caption}</Typography>}
    </Box>
  );
};

export default BaseInput;
