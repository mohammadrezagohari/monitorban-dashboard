import Button from "../buttons/Button";
import {
  Backdrop,
  ButtonsContainer,
  Message,
  StyledBackdropContainer,
  Title,
} from "./Backdrop.styles";
import { ErrorBackdropProps } from "./IBackdrop";

export default function ErrorBackdrop({ open, onClose, onConfirm }: ErrorBackdropProps) {
  return (
    <Backdrop open={open}>
      <StyledBackdropContainer onClick={(e) => e.stopPropagation()}>
        <Title $type="error">عملیات ناموفق</Title>

        <Message>خطایی در ایجاد دسترسی های جدید رخ داده است</Message>

        <ButtonsContainer>
          <Button
            variant="contained"
            size="xsmall"
            colorType="primary"
            onClick={onConfirm}
          >
            Retry
          </Button>
        </ButtonsContainer>
      </StyledBackdropContainer>
    </Backdrop>
  );
}
