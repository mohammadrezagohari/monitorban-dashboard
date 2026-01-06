import { useTheme } from "@mui/material";

import Button from "@/presentation/components/common/buttons/Button";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import {
  ButtonsContainer,
  QuestionText,
  StyledFAQCard,
} from "./FAQManagement.styles";
import { FAQCardProps } from "./IFAQManagement";

function FAQCard({ faq }: FAQCardProps) {
  const { question } = faq;
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  return (
    <StyledFAQCard>
      <QuestionText variant="body1" color="neutral.main">
        {question}
      </QuestionText>

      <ButtonsContainer>
        <Button
          variant="outlined"
          size={isMediumScreen ? "small" : "xxsmall"}
          colorType="error"
        >
          حذف
        </Button>
        <Button
          variant="outlined"
          size={isMediumScreen ? "small" : "xxsmall"}
          colorType="success"
        >
          ویرایش
        </Button>
      </ButtonsContainer>
    </StyledFAQCard>
  );
}

export default FAQCard;
