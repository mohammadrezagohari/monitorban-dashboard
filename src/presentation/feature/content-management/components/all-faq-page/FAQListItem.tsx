import {
  ButtonsContainer,
  QuestionText,
  StyledExpandBox,
  StyledFAQListItem,
  StyledQuestionBox,
} from "./AllFAQsPage.styles";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import Divider from "src/presentation/components/common/divider/Divider";
import { Typography } from "@mui/material";
import Button from "src/presentation/components/common/buttons/Button";
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
          <IconButtonWithBorder onClick={() => onChange(panel)}>
            {expanded === panel ? (
              <ArrowUpIcon size={16} />
            ) : (
              <ArrowDownIcon size={16} />
            )}
          </IconButtonWithBorder>
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
