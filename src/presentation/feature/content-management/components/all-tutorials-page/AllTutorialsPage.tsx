import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { tutorialsData } from "src/presentation/data/data";
import TutorialCard from "../tutorials-management/TutorialCard";
import Button from "src/presentation/components/common/buttons/Button";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { useNavigate } from "react-router-dom";
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
            startIcon={<PlusIcon size={24} />}
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
