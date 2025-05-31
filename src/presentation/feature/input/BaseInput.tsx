import { Box, InputAdornment } from "@mui/material";
import { Container, StyledLabel, StyledTextField } from "./BaseInput.styles";
import { BaseInputProps } from "./IBaseInput";
import { useState } from "react";

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

  const isPassword = type === "password";

  return (
    <Box>
      <StyledLabel variant="body1">{label}</StyledLabel>
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
              bgcolor: "#1C1926",
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
        helperText={caption}
        placeholder={placeholder}
        type={isPassword ? (visible ? "text" : "password") : type}
        // type="password"
        {...props}
      />
    </Box>
  );
};

export default BaseInput;
