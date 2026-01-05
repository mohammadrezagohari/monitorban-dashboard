import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "@/presentation/components/common/buttons/Button";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { FAQs } from "@/presentation/data/data";
import { SectionHeader } from "../../ContentManagementPage.styles";
import { StyledFAQList } from "./AllFAQsPage.styles";
import FAQListItem from "./FAQListItem";

function AllFAQsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const allFAQs = FAQs;
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleExpand(panel: string) {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : null));
  }

  function handleAddFAQ() {
    navigate("/content-management/add-new-FAQ");
  }

  return (
    <>
      <PageTitle title="پرسش های متداول" />

      <SectionContainer>
        <SectionHeader>
          <SectionTitle>لیست پرسش های متداول</SectionTitle>

          <Button
            variant="outlined"
            size={isDesktop ? "large" : "xxsmall"}
            colorType="primary"
            rightIcon="plus"
            onClick={handleAddFAQ}
          >
            افزودن پرسش جدید
          </Button>
        </SectionHeader>

        <StyledFAQList>
          {allFAQs.map((faq) => (
            <FAQListItem
              key={faq.id}
              faq={faq}
              expanded={expanded}
              panel={`panel${faq.id}`}
              onChange={handleExpand}
            />
          ))}
        </StyledFAQList>
      </SectionContainer>
    </>
  );
}

export default AllFAQsPage;
