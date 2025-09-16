import Button from "../buttons/Button";
import {
  Backdrop,
  ButtonsContainer,
  Message,
  StyledBackdropContainer,
  Title,
} from "./Backdrop.styles";
import { ErrorBackdropProps } from "./IBackdrop";

export default function ErrorBackdrop({
  open,
  onClose,
  onConfirm,
}: ErrorBackdropProps) {
  return (
    <Backdrop open={open}>
      <StyledBackdropContainer onClick={(e) => e.stopPropagation()}>
        <Title $type="error">عملیات ناموفق</Title>

        <Message>
          افزودن دسترسی های جدید با خطا مواجه شد. لطفا <span>مجددا</span> تلاش
          کنید
        </Message>

        <ButtonsContainer>
          <Button
            variant="contained"
            size="xsmall"
            colorType="primary"
            onClick={onConfirm}
          >
            تلاش مجدد
          </Button>
        </ButtonsContainer>
      </StyledBackdropContainer>
    </Backdrop>
  );
}
