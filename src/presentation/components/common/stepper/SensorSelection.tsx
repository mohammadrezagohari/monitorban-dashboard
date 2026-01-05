import TreeView from "../tree-view/TreeView";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";

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
