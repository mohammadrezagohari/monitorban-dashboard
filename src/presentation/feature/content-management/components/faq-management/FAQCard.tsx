import Button from "src/presentation/components/common/buttons/Button";
import { FAQCardProps } from "./IFAQManagement";
import {
  ButtonsContainer,
  QuestionText,
  StyledFAQCard,
} from "./FAQManagement.styles";

function FAQCard({ faq }: FAQCardProps) {
  const { question } = faq;
  return (
    <StyledFAQCard>
      <QuestionText variant="body1" color="neutral.main">
        {question}
      </QuestionText>

      <ButtonsContainer>
        <Button variant="outlined" size="small" colorType="error">
          حذف
        </Button>
        <Button variant="outlined" size="small" colorType="success">
          ویرایش
        </Button>
      </ButtonsContainer>
    </StyledFAQCard>
  );
}

export default FAQCard;
