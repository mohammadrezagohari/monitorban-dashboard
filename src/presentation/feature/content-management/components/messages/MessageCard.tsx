import { Typography } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import Divider from "src/presentation/components/common/divider/Divider";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { MessageCardProps } from "./IMessages";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import {
  AccordionHeader,
  ButtonsContainer,
  StyledExpandedBox,
  StyledMessageCard,
  StyledTextMessage,
} from "./messages.styles";

function MessageCard({ message, expanded, panel, onChange }: MessageCardProps) {
  const { message: messageText, answer } = message;
  return (
    <StyledMessageCard>
      <AccordionHeader>
        <StyledTextMessage>{messageText}</StyledTextMessage>
        <ButtonsContainer>
          <Button
            variant={expanded === panel ? "contained" : "outlined"}
            size="xxsmall"
            colorType="success"
          >
            پاسخ دادن
          </Button>

          <IconButtonWithBorder onClick={() => onChange(panel)}>
            {expanded === panel ? (
              <ArrowUpIcon size={16} />
            ) : (
              <ArrowDownIcon size={16} />
            )}
          </IconButtonWithBorder>
        </ButtonsContainer>
      </AccordionHeader>

      <StyledExpandedBox expanded={expanded} panel={panel}>
        <Divider />
        <Typography variant="body2" color="neutral.200">
          {answer}
        </Typography>
      </StyledExpandedBox>
    </StyledMessageCard>
  );
}

export default MessageCard;
