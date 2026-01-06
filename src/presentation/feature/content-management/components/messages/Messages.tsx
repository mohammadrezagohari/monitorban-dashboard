import { useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/presentation/components/common/buttons/Button";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { messages as initialMessages } from "@/presentation/data/data";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { SectionHeader } from "../../ContentManagementPage.styles";
import MessageCard from "./MessageCard";
import { StyledMainSection, StyledMessagesContainer } from "./messages.styles";

function Messages() {
  const [messages, setMessages] = useState(
    initialMessages.filter((msg) => !msg.isAnswered).slice(0, 3)
  );
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

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
          size={isMediumScreen ? "large" : "xxsmall"}
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
