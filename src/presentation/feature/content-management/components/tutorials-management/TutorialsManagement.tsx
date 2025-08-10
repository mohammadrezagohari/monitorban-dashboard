import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import Button from "src/presentation/components/common/buttons/Button";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import TagHeading from "src/presentation/components/common/tag-heading/TagHeading";
import Tag from "src/presentation/components/common/tag/Tag";
import TutorialCard from "./TutorialCard";
import { tutorialsData } from "src/presentation/data/data";
import { useNavigate } from "react-router-dom";

function TutorialsManagement() {
  const visibleTutorial = tutorialsData.slice(0, 3);
  const navigate = useNavigate();

  function handleViewAll() {
    navigate("/content-management/tutorials");
  }

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>آموزش ها</SectionTitle>

        <Button
          variant="outlined"
          size="large"
          colorType="primary"
          onClick={handleViewAll}
        >
          مشاهده همه
        </Button>
      </HeaderContainer>

      <MainContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {visibleTutorial.map((tutorial) => (
          <TutorialCard tutorial={tutorial} />
        ))}
      </MainContainer>
    </SectionContainer>
  );
}

export default TutorialsManagement;
