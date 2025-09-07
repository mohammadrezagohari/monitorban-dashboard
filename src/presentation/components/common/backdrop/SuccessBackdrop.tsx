import Button from "../buttons/Button";
import {
  Backdrop,
  ButtonsContainer,
  Message,
  StyledBackdropContainer,
  Title,
} from "./Backdrop.styles";
import { SuccessBackdropProps } from "./IBackdrop";

export default function SuccessBackdrop({
  open,
  onClose,
}: SuccessBackdropProps) {
  return (
    <Backdrop open={open}>
      <StyledBackdropContainer onClick={(e) => e.stopPropagation()}>
        <Title $type="success">عملیات موفق</Title>

        <Message>دسترسی های جدید با موفقیت ایجاد شد</Message>

        <ButtonsContainer>
          <Button
            variant="contained"
            size="xsmall"
            colorType="primary"
            onClick={onClose}
          >
            بستن
          </Button>
        </ButtonsContainer>
      </StyledBackdropContainer>
    </Backdrop>
  );
}
