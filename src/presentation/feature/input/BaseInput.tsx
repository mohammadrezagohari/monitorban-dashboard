import { InputAdornment } from "@mui/material";
import { Container, StyledLabel, StyledTextField } from "./BaseInput.styles";
import { BaseInputProps } from "./IBaseInput";
import { useState } from "react";

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  placeholder,
  caption,
  status = "default",
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Container>
      <StyledLabel variant="body1" mb={2}>
        {label}
      </StyledLabel>
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
                sx={{ cursor: "pointer" }}
              >
                {!visible ? props.primaryIcon : props.secondaryIcon}
              </InputAdornment>
            ),
            sx: {
              bgcolor: "#1C1926",
              borderRadius: "15px",
              width: "343px",
              typography: "body2",
            },
          },
        }}
        status={status}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        helperText={caption}
        placeholder={placeholder}
        {...props}
      />
    </Container>
  );
};

export default BaseInput;
