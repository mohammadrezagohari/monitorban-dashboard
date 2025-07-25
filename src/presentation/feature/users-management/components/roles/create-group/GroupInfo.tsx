import Input from "src/presentation/components/common/input/Input";
import FormRow from "src/presentation/components/common/input/FormRow";
import { GridBox } from "src/presentation/components/common/GridBox";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

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
