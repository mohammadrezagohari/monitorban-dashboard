import Button from "src/presentation/components/common/buttons/Button";
import { FAQCardProps } from "./IFAQManagement";
import {
  ButtonsContainer,
  QuestionText,
  StyledFAQCard,
} from "./FAQManagement.styles";
import { useMediaQuery, useTheme } from "@mui/material";

function FAQCard({ faq }: FAQCardProps) {
  const { question } = faq;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledFAQCard>
      <QuestionText variant="body1" color="neutral.main">
        {question}
      </QuestionText>

      <ButtonsContainer>
        <Button
          variant="outlined"
          size={isDesktop ? "small" : "xxsmall"}
          colorType="error"
        >
          حذف
        </Button>
        <Button
          variant="outlined"
          size={isDesktop ? "small" : "xxsmall"}
          colorType="success"
        >
          ویرایش
        </Button>
      </ButtonsContainer>
    </StyledFAQCard>
  );
}

export default FAQCard;
