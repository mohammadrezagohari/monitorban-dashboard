import { useNavigate } from "react-router-dom";

import Button from "@/presentation/components/common/buttons/Button";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { tutorialsData } from "@/presentation/data/data";
import TutorialCard from "../tutorials-management/TutorialCard";
import { StyledTutorialsList } from "./AllTutorialsPage.styles";

function AllTutorialsPage() {
  const navigate = useNavigate();
  const allTutorials = tutorialsData;

  function handleAddTutorial() {
    navigate("/content-management/add-tutorial");
  }

  return (
    <>
      <PageTitle title="آموزش ها" />

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>لیست آموزش ها</SectionTitle>

          <Button
            variant="outlined"
            size="large"
            colorType="primary"
            rightIcon="plus"
            onClick={handleAddTutorial}
          >
            افزودن آموزش جدید
          </Button>
        </HeaderContainer>
        <StyledTutorialsList>
          {allTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </StyledTutorialsList>
      </SectionContainer>
    </>
  );
}

export default AllTutorialsPage;
