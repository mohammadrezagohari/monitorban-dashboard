import { useState } from "react";

import Button from "src/presentation/components/common/buttons/Button";
import { FAQs } from "src/presentation/data/data";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import FAQListItem from "./FAQListItem";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { StyledFAQList } from "./AllFAQsPage.styles";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "../../ContentManagementPage.styles";
import { useMediaQuery, useTheme } from "@mui/material";

function AllFAQsPage() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const allFAQs = FAQs;
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleExpand(panel) {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : false));
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
            startIcon={<PlusIcon size={isDesktop ? 24 : 16} />}
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
