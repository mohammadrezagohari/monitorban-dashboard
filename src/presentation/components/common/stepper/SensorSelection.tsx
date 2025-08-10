import TreeView from "../tree-view/CustomTreeView";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

function SensorSelection() {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>سنسور مورد نظرتان را انتخاب کنید</SectionTitle>
      </HeaderContainer>
      <MainContainer color="neutral.main">
        <TreeView />
      </MainContainer>
    </SectionContainer>
  );
}

export default SensorSelection;
