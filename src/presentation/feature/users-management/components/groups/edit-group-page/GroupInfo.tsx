import { Form } from "src/presentation/components/common/Form";
import FormRow from "src/presentation/components/common/input/FormRow";
import Input from "src/presentation/components/common/input/Input";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import { GroupInfoMainContainer } from "./EditGroupPage.styles";
import { useForm } from "react-hook-form";

function GroupInfo({ group }) {
  const { register } = useForm({ defaultValues: group });

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات گروه</SectionTitle>
      </HeaderContainer>
      <GroupInfoMainContainer>
        <Form>
          <GridBox>
            <FormRow label="نام گروه">
              <Input id="groupName" {...register("groupName")} />
            </FormRow>
          </GridBox>
        </Form>
      </GroupInfoMainContainer>
    </SectionContainer>
  );
}

export default GroupInfo;
