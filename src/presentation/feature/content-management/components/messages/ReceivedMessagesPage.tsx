import { useState } from "react";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import MessageCard from "./MessageCard";
import { messages } from "src/presentation/data/data";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { StyledReceivedMessagesListContainer } from "./messages.styles";

function ReceivedMessagesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleExpand(panel: string) {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : null));
  }
  return (
    <>
      <PageTitle title="پیغام ها" />

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>پیام های دریافتی</SectionTitle>
        </HeaderContainer>

        <StyledReceivedMessagesListContainer>
          {messages.map((message) => (
            <MessageCard
              message={message}
              key={message.id}
              expanded={expanded}
              panel={`message${message.id}`}
              onChange={handleExpand}
            />
          ))}
        </StyledReceivedMessagesListContainer>
      </SectionContainer>
    </>
  );
}

export default ReceivedMessagesPage;
