import { isValidElement } from "react";
import { Error, Label, StyledFormRow } from "./Form.styles";
import { FormRowProps } from "./IForm";

function FormRow({ label, children, error, ...props }: FormRowProps) {
  return (
    <StyledFormRow $error={error} {...props}>
      {label && isValidElement(children) && (
        <Label
          htmlFor={(children as React.ReactElement<{ id?: string }>).props.id}
        >
          {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
