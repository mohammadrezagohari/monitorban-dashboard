import { Divider,  Typography } from "@mui/material";

import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import {
  StyledAnswerContainer,
  StyledFAQItemContainer,
  StyledQuestionContainer,
} from "./FAQ.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

export default function FAQItem({ item, panel, expanded, onChange }) {
  const { question, answer } = item;

  //   console.log("panel:: ", panel, "expanded:: ", expanded);

  return (
    <StyledFAQItemContainer>
      <StyledQuestionContainer>
        <Typography variant="body1" color="neutral.100">
          {question}
        </Typography>
        <IconButtonWithBorder onClick={() => onChange(panel)}>
          {expanded === panel ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
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
