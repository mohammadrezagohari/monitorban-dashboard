import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import MessageCard from "./MessageCard";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { SectionHeader } from "../../ContentManagementPage.styles";
import { messages as initialMessages } from "src/presentation/data/data";
import { StyledMainSection, StyledMessagesContainer } from "./messages.styles";

function Messages() {
  const [messages, setMessages] = useState(
    initialMessages.filter((msg) => !msg.isAnswered).slice(0, 3)
  );
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleViewAll() {
    navigate("messages");
  }

  function handleExpand(panel: string) {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : null));
  }

  return (
    <StyledMessagesContainer>
      <SectionHeader>
        <SectionTitle>پیغام ها</SectionTitle>
        <Button
          variant="outlined"
          size={isDesktop ? "large" : "xxsmall"}
          colorType="primary"
          onClick={handleViewAll}
        >
          مشاهده همه
        </Button>
      </SectionHeader>

      <StyledMainSection>
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            expanded={expanded}
            panel={`message${message.id}`}
            onChange={handleExpand}
          />
        ))}
      </StyledMainSection>
    </StyledMessagesContainer>
  );
}

export default Messages;
