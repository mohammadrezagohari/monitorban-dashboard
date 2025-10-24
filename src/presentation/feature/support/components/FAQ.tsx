import useFAQ from "./useFAQ";
import FAQItem from "./FAQItem";
import { FAQProps, FAQType } from "./IFAQ";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { StyledMainContainer } from "./FAQ.styles";

function FAQ({ expanded, onChange }: FAQProps) {
  console.log(onChange);
  const { isLoading, FAQs, isError } = useFAQ();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>پرسش های متداول</SectionTitle>
      </HeaderContainer>
      <StyledMainContainer>
        {isLoading && <div>Loading...</div>}
        {/* {isError && <div>Error fetching FAQs</div>} */}
        {FAQs &&
          FAQs.map((faq: FAQType, index: number) => (
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
