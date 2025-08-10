import Button from "src/presentation/components/common/buttons/Button";
import FAQCard from "./FAQCard";
import { FAQs } from "src/presentation/data/data";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { StyledQuestionsBox } from "./FAQManagement.styles";
import { useNavigate } from "react-router-dom";

function FAQManagement() {
  const visibleFAQs = FAQs.slice(0, 3);
  const navigate = useNavigate();

  function handleViewAll() {
    navigate("/content-management/FAQs");
  }

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>پرسش های متداول</SectionTitle>

        <Button
          variant="outlined"
          size="large"
          colorType="primary"
          onClick={handleViewAll}
        >
          مشاهده همه
        </Button>
      </HeaderContainer>

      <StyledQuestionsBox>
        {visibleFAQs.map((faq) => (
          <FAQCard faq={faq} key={faq.id} />
        ))}
      </StyledQuestionsBox>
    </SectionContainer>
  );
}

export default FAQManagement;
