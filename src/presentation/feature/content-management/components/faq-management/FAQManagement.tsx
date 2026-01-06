import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "@/presentation/components/common/buttons/Button";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { FAQs } from "@/presentation/data/data";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { SectionHeader } from "../../ContentManagementPage.styles";
import FAQCard from "./FAQCard";
import { StyledQuestionsBox } from "./FAQManagement.styles";

function FAQManagement() {
  const visibleFAQs = FAQs.slice(0, 3);
  const navigate = useNavigate();
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  function handleViewAll() {
    navigate("/content-management/FAQs");
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>پرسش های متداول</SectionTitle>

        <Button
          variant="outlined"
          size={isMediumScreen ? "large" : "xxsmall"}
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
