import FAQItem from "./FAQItem";
import { FAQs } from "src/presentation/data/data";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledMainContainer } from "./FAQ.styles";

function FAQ({ expanded, onChange }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>پرسش های متداول</SectionTitle>
      </HeaderContainer>
      <StyledMainContainer>
        {FAQs.map((faq, index) => (
          <FAQItem
            expanded={expanded}
            onChange={onChange}
            panel={`panel${index + 1}`}
            item={faq}
            key={faq.id}
          />
        ))}
      </StyledMainContainer>
    </SectionContainer>
  );
}

export default FAQ;
