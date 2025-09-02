import Button from "src/presentation/components/common/buttons/Button";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import {
  AccordionHeader,
  ButtonsContainer,
  StyledExpandedBox,
  StyledMessageCard,
  StyledTextMessage,
} from "./messages.styles";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import Divider from "src/presentation/components/common/divider/Divider";
import { Box, Typography } from "@mui/material";

function MessageCard({ message, expanded, panel, onChange }) {
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
