import Button from "src/presentation/components/common/buttons/Button";
import {
  ButtonsContainer,
  Message,
  StyledBackdropContainer,
  Title,
} from "./Backdrop.styles";
import { DeleteBackdropProps } from "./IBackdrop";
import { Box } from "@mui/material";

function DeleteConfirmBackdrop({
  disabled,
  onClose,
  onConfirm,
  roleTitle,
}: DeleteBackdropProps) {
  
  return (
    // <Box open={open} onClick={onClose}>
    <Box>
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
            disabled={disabled}
          >
            تایید
          </Button>
        </ButtonsContainer>
      </StyledBackdropContainer>
    </Box>
  );
}

export default DeleteConfirmBackdrop;
