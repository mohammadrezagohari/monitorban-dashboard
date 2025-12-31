import { Divider, Typography } from "@mui/material";

import IconButton from "src/presentation/components/common/icon-button/IconButton";
import {
  StyledAnswerContainer,
  StyledFAQItemContainer,
  StyledQuestionContainer,
} from "./FAQ.styles";
import { FAQItemProps } from "./IFAQ";

export default function FAQItem({
  item,
  panel,
  expanded,
  onChange,
}: FAQItemProps) {
  const { question, answer } = item;

  return (
    <StyledFAQItemContainer>
      <StyledQuestionContainer>
        <Typography variant="body1" color="neutral.100">
          {question}
        </Typography>
        <IconButton
          onClick={() => onChange(panel)}
          iconName={expanded === panel ? "arrowUp" : "arrowDown"}
        />
      </StyledQuestionContainer>

      <StyledAnswerContainer panel={panel} expanded={expanded}>
        <Divider sx={{ marginBlock: 2 }} />
        <Typography variant="body2" color="neutral.200">
          {answer}
        </Typography>
      </StyledAnswerContainer>
    </StyledFAQItemContainer>
  );
}
