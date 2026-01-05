import { useMediaQuery, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import Button from "@/presentation/components/common/buttons/Button";
import { StyledInput } from "@/presentation/components/common/input/Form.styles";
import FormRow from "@/presentation/components/common/input/FormRow";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Select from "@/presentation/components/common/select/Select";
import { Form } from "./Users.styles";

const ROLES = [
  { id: 1, label: "نقش 1", value: "role1" },
  { id: 2, label: "نقش 2", value: "role2" },
  { id: 3, label: "نقش 3", value: "role3" },
];

function FilterOperation() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { control } = useForm();

  if (!isDesktop)
    return (
      <Button
        variant="outlined"
        size="small"
        colorType="primary"
        rightIcon="filter"
      >
        فیلتر
      </Button>
    );

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>فیلتر</SectionTitle>
      </HeaderContainer>
      <MainContainer>
        <Form>
          <FormRow label="نام کاربر">
            <StyledInput id="userName" placeholder="نام کابر را وارد کنید" />
          </FormRow>

          <FormRow label="شماره تماس">
            <StyledInput id="userPhone" placeholder="شماره تماس را وارد کنید" />
          </FormRow>

          <FormRow label="نقش">
            <Controller
              name="userRole"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  id="userRole"
                  options={ROLES}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </FormRow>
          <Button variant="outlined" size="large" colorType="primary">
            انتخاب
          </Button>
        </Form>
      </MainContainer>
    </SectionContainer>
  );
}

export default FilterOperation;
