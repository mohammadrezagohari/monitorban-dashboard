import { Controller, useForm } from "react-hook-form";

import { Form } from "@/presentation/components/common/Form";
import FormRow from "@/presentation/components/common/input/FormRow";
import Input from "@/presentation/components/common/input/Input";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Select from "@/presentation/components/common/select/Select";
import { filterOptions } from "@/presentation/data/data";
import { RoleInfoMainContainer } from "./EditRolePage.styles";
import { GridBox } from "@/presentation/components/common/GridBox";

function RoleInfo({ role }) {
  const { control, register } = useForm({ defaultValues: role });

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات نقش</SectionTitle>
      </HeaderContainer>
      <RoleInfoMainContainer>
        <Form>
          <GridBox>
            <FormRow label="نام نقش">
              <Input id="roleName" {...register("roleName")} />
            </FormRow>
            <FormRow label="اتاق سرور">
              <Controller
                name="serverRoom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    id="serverRoom"
                    options={filterOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FormRow>
          </GridBox>
        </Form>
      </RoleInfoMainContainer>
    </SectionContainer>
  );
}

export default RoleInfo;
