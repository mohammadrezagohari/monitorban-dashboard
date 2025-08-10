import { ReactNode } from "react";
import { Error, Label, StyledFormRow } from "./Form.styles";

interface FormRowProps {
  label?: string;
  children: ReactNode;
  error?: string;
  gridColumn?: string;
}

function FormRow({ label, children, error, ...props }: FormRowProps) {
  return (
    <StyledFormRow {...props}>
      {label && <Label htmlFor={children?.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
