import Input from "src/presentation/components/common/input/Input";
import Button from "src/presentation/components/common/buttons/Button";
import FormRow from "src/presentation/components/common/input/FormRow";
import { Form } from "src/presentation/components/common/Form";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ButtonsContainer } from "./ChangePasswordPage.styles";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";

export default function ChangePasswordPage() {
  return (
    <>
      <PageTitle title="رمز عبور" />

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>ایجاد رمز عبور جدید</SectionTitle>
        </HeaderContainer>
        <MainContainer>
          <Form>
            <GridBox sx={{ rowGap: "24px !important" }}>
              <FormRow label="رمز عبور فعلی">
                <Input id="currentPassword" icon type="password" />
              </FormRow>

              <FormRow label="رمز عبور جدید">
                <Input id="newPassword" icon type="password" />
              </FormRow>

              <FormRow label="تکرار رمز عبور">
                <Input id="retypeNewPassword" icon type="password" />
              </FormRow>

              <ButtonsContainer>
                <Button variant="outlined" size="small" colorType="primary">
                  انصراف
                </Button>
                <Button variant="contained" size="small" colorType="primary">
                  ذخیره تغییرات
                </Button>
              </ButtonsContainer>
            </GridBox>
          </Form>
        </MainContainer>
      </SectionContainer>
    </>
  );
}
