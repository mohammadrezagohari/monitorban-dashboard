import { useState } from "react";

import Button from "src/presentation/components/common/buttons/Button";
import MessageCard from "./MessageCard";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { messages as initialMessages } from "src/presentation/data/data";
import { StyledMainSection, StyledMessagesContainer } from "./messages.styles";
import { useNavigate } from "react-router-dom";

function Messages() {
  const [messages, setMessages] = useState(
    initialMessages.filter((msg) => !msg.isAnswered)
  );
  const [expanded, setExpanded] = useState<string | false>(false);
  const navigate = useNavigate();

  function handleViewAll() {
    navigate("messages");
  }

  function handleExpand(panel) {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : false));
  }

  return (
    <StyledMessagesContainer>
      <HeaderContainer>
        <SectionTitle>پیغام ها</SectionTitle>
        <Button
          variant="outlined"
          size="large"
          colorType="primary"
          onClick={handleViewAll}
        >
          مشاهده همه
        </Button>
      </HeaderContainer>

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
