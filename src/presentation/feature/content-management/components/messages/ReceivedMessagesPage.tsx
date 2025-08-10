import { messages } from "src/presentation/data/data";
import { useState } from "react";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import MessageCard from "./MessageCard";

function ReceivedMessagesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleExpand(panel) {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : false));
  }
  return (
    <>
      <PageTitle title="پیغام ها" />

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>پیام های دریافتی</SectionTitle>
        </HeaderContainer>

        <MainContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {messages.map((message) => (
            <MessageCard
              message={message}
              key={message.id}
              expanded={expanded}
              panel={`message${message.id}`}
              onChange={handleExpand}
            />
          ))}
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default ReceivedMessagesPage;
