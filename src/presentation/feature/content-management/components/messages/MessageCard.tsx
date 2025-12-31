import { Typography } from "@mui/material";

import { Icon } from "src/presentation/components/common/icons/components/Icon";
import Button from "src/presentation/components/common/buttons/Button";
import Divider from "src/presentation/components/common/divider/Divider";
import { MessageCardProps } from "./IMessages";
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
          <Icon
            name={expanded === panel ? "arrowUp" : "arrowDown"}
            w={16}
            h={16}
          />
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
