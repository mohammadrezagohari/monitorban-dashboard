import Button from "src/presentation/components/common/buttons/Button";
import {
  Backdrop,
  ButtonsContainer,
  Message,
  StyledBackdropContainer,
  Title,
} from "./Backdrop.styles";
import { DeleteBackdropProps } from "./IBackdrop";

function DeleteConfirmBackdrop({
  open,
  onClose,
  onConfirm,
  roleTitle,
}: DeleteBackdropProps) {
  return (
    <Backdrop open={open} onClick={onClose}>
      <StyledBackdropContainer onClick={(e) => e.stopPropagation()}>
        <Title $type="warning">هشدار!</Title>
        <Message>
          آیا از حذف نقش <span>"{roleTitle}"</span> مطمئن هستید ؟
        </Message>
        <ButtonsContainer>
          <Button
            variant="outlined"
            size="xsmall"
            colorType="primary"
            onClick={onClose}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            size="xsmall"
            colorType="primary"
            onClick={onConfirm}
          >
            تایید
          </Button>
        </ButtonsContainer>
      </StyledBackdropContainer>
    </Backdrop>
  );
}

export default DeleteConfirmBackdrop;
