import { Box } from "@mui/material";
import {
  Container,
  IconWrraper,
  StyledCaption,
  StyledLabel,
  StyledTextField,
} from "./BaseInput.styles";
import { BaseInputProps } from "./IBaseInput";

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  caption,
  status = "default",
  icon,
  ...props
}) => {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}

      <Box
        position="relative"
        sx={{
          width: "343px",
          borderRadius: "15px",
          display: "flex",
          padding: "16px",
          alignItems: "center",
          border: `1px solid ${
            status === "error"
              ? "#E8383B"
              : status === "accept"
              ? "#0FD36A"
              : "#5B5266"
          }`,
        }}
      >
        <StyledTextField
          status={status}
          variant="filled"
          {...props}
          // sx={{
          //     "& .MuiOutlinedInput-root": {

          //     }
          // }}
        />
        {icon && <IconWrraper>{icon}</IconWrraper>}
      </Box>
      {caption && <StyledCaption status={status}>{caption}</StyledCaption>}
    </Container>
  );
};

export default BaseInput;
