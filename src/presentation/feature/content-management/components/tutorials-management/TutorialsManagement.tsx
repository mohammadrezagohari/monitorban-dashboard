import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

import Button from "@/presentation/components/common/buttons/Button";
import TutorialCard from "./TutorialCard";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { tutorialsData } from "@/presentation/data/data";
import { TutorialsList } from "./TutorialManagement.styles";
import { SectionHeader } from "../../ContentManagementPage.styles";

function TutorialsManagement() {
  const visibleTutorial = tutorialsData.slice(0, 3);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleViewAll() {
    navigate("/content-management/tutorials");
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>آموزش ها</SectionTitle>

        <Button
          variant="outlined"
          size={isDesktop ? "large" : "xxsmall"}
          colorType="primary"
          onClick={handleViewAll}
        >
          مشاهده همه
        </Button>
      </SectionHeader>

      <TutorialsList>
        {visibleTutorial.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </TutorialsList>
    </SectionContainer>
  );
}

export default TutorialsManagement;
