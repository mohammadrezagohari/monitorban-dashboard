import Input from "@/presentation/components/common/input/Input";
import FormRow from "@/presentation/components/common/input/FormRow";
import { GridBox } from "@/presentation/components/common/GridBox";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";

function GroupInfo() {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات گروه</SectionTitle>
      </HeaderContainer>
      <MainContainer>
        <GridBox>
          <FormRow label="نام گروه">
            <Input id="groupName" />
          </FormRow>
        </GridBox>
      </MainContainer>
    </SectionContainer>
  );
}

export default GroupInfo;
