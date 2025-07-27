import { Controller, useForm } from "react-hook-form";

import { Form } from "src/presentation/components/common/Form";
import FormRow from "src/presentation/components/common/input/FormRow";
import Input from "src/presentation/components/common/input/Input";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Select from "src/presentation/components/common/select/Select";
import { filterOptions } from "src/presentation/data/data";
import { RoleInfoMainContainer } from "./EditRolePage.styles";
import { GridBox } from "src/presentation/components/common/GridBox";

function RoleInfo() {
  const { control } = useForm();

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات نقش</SectionTitle>
      </HeaderContainer>
      <RoleInfoMainContainer>
        <Form>
          <GridBox>
            <FormRow label="نام نقش">
              <Input id="roleName" />
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
