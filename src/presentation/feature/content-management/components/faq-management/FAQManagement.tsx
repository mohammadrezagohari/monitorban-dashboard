import Button from "src/presentation/components/common/buttons/Button";
import FAQCard from "./FAQCard";
import { FAQs } from "src/presentation/data/data";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { StyledQuestionsBox } from "./FAQManagement.styles";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "../../ContentManagementPage.styles";
import { useMediaQuery, useTheme } from "@mui/material";

function FAQManagement() {
  const visibleFAQs = FAQs.slice(0, 3);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleViewAll() {
    navigate("/content-management/FAQs");
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>پرسش های متداول</SectionTitle>

        <Button
          variant="outlined"
          size={isDesktop ? "large" : "xxsmall"}
          colorType="primary"
          onClick={handleViewAll}
        >
          مشاهده همه
        </Button>
      </SectionHeader>

      <StyledQuestionsBox>
        {visibleFAQs.map((faq) => (
          <FAQCard faq={faq} key={faq.id} />
        ))}
      </StyledQuestionsBox>
    </SectionContainer>
  );
}

export default FAQManagement;
