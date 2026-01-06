import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "@/presentation/components/common/buttons/Button";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { tutorialsData } from "@/presentation/data/data";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { SectionHeader } from "../../ContentManagementPage.styles";
import TutorialCard from "./TutorialCard";
import { TutorialsList } from "./TutorialManagement.styles";

function TutorialsManagement() {
  const visibleTutorial = tutorialsData.slice(0, 3);
  const navigate = useNavigate();
  const theme = useTheme();
  const { isMediumScreen } = useScreenSize();

  function handleViewAll() {
    navigate("/content-management/tutorials");
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>آموزش ها</SectionTitle>

        <Button
          variant="outlined"
          size={isMediumScreen ? "large" : "xxsmall"}
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
