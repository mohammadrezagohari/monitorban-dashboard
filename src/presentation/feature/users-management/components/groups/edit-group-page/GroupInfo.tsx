import { Form } from "@/presentation/components/common/Form";
import FormRow from "@/presentation/components/common/input/FormRow";
import Input from "@/presentation/components/common/input/Input";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { GridBox } from "@/presentation/components/common/GridBox";
import { GroupInfoMainContainer } from "./EditGroupPage.styles";
import { useForm } from "react-hook-form";
import { GroupType } from "./IEditGroupPage";

function GroupInfo({ group }: { group: GroupType }) {
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
