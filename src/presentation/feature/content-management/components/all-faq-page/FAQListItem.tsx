import { Icon } from "@/presentation/components/common/icons/components/Icon";
import { Typography } from "@mui/material";
import Button from "@/presentation/components/common/buttons/Button";
import Divider from "@/presentation/components/common/divider/Divider";
import {
  ButtonsContainer,
  QuestionText,
  StyledExpandBox,
  StyledFAQListItem,
  StyledQuestionBox,
} from "./AllFAQsPage.styles";
import { FAQItemProps } from "./IAllFAQsPage";

function FAQListItem({ faq, expanded, panel, onChange }: FAQItemProps) {
  const { id, question, answer } = faq;

  return (
    <StyledFAQListItem>
      <StyledQuestionBox>
        <QuestionText variant="body1" color="neutral.main">
          {question}
        </QuestionText>

        <ButtonsContainer>
          <Button variant="outlined" size="xxsmall" colorType="error">
            حذف
          </Button>
          <Button variant="outlined" size="xxsmall" colorType="success">
            ویرایش
          </Button>

          <Icon
            name={expanded === panel ? "arrowUp" : "arrowDown"}
            w={16}
            h={16}
          />
        </ButtonsContainer>
      </StyledQuestionBox>

      <StyledExpandBox expanded={expanded} panel={panel}>
        <Divider />
        <Typography variant="body2" color="neutral.200">
          {answer}
        </Typography>
      </StyledExpandBox>
    </StyledFAQListItem>
  );
}

export default FAQListItem;
