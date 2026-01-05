import { Box } from "@mui/material";

import Input from "@/presentation/components/common/input/Input";
import Button from "@/presentation/components/common/buttons/Button";
import FormRow from "@/presentation/components/common/input/FormRow";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";

function SecurityInfo() {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>اطلاعات امنیتی</SectionTitle>
        <Box>
          <Button variant="outlined" size="small" colorType="primary">
            تغییر رمز عبور
          </Button>
        </Box>
      </HeaderContainer>
      <MainContainer sx={{ maxWidth: 350 }}>
        <FormRow label="رمز عبور">
          <Input
            id="password"
            type="password"
            icon
            placeholder="رمز عبور را وارد کنید"
          />
        </FormRow>
      </MainContainer>
    </SectionContainer>
  );
}

export default SecurityInfo;
