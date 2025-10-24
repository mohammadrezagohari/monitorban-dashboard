import { Divider, Typography } from "@mui/material";

import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { FAQItemProps } from "./IFAQ";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import {
  StyledAnswerContainer,
  StyledFAQItemContainer,
  StyledQuestionContainer,
} from "./FAQ.styles";

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
        <IconButtonWithBorder onClick={() => onChange(panel)}>
          {expanded === panel ? (
            <ArrowUpIcon size={16} />
          ) : (
            <ArrowDownIcon size={16} />
          )}
        </IconButtonWithBorder>
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
