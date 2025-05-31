import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { Box } from "@mui/material";
import BaseInput from "../../input/BaseInput";
import { VisibleEyeIcon } from "src/presentation/components/common/icons/VisibleEyeIcon";
import { HiddenEyeIcon } from "src/presentation/components/common/icons/HiddenEyeIcon";
import { CloseIcon } from "src/presentation/components/common/icons/CloseIcon";
import ButtonPrimarySmallOutlined from "../../buttons/ButtonPrimarySmallOutlined";
import ButtonPrimarySmallFilled from "../../buttons/ButtonPrimarySmallFilled";

export default function ChangePasswordPage() {
  return (
    <Box>
      <Box mb={2}>
        <PageTitle>رمز عبور</PageTitle>
      </Box>
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>ایجاد رمز عبور جدید</SectionTitle>
        </HeaderContainer>
        <MainContainer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            <BaseInput
              //   placeholder="test"
              label="رمز عبور فعلی"
              primaryIcon={<HiddenEyeIcon />}
              secondaryIcon={<VisibleEyeIcon />}
              type="password"
            />
            <BaseInput
              label="رمز عبور جدید"
              primaryIcon={<HiddenEyeIcon />}
              secondaryIcon={<VisibleEyeIcon />}
              type="password"
            />
            <BaseInput
              label="تکرار رمز عبور"
              primaryIcon={<HiddenEyeIcon />}
              secondaryIcon={<VisibleEyeIcon />}
              type="password"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                gridColumn: " 1/ -1",
                justifySelf: "flex-end",
              }}
            >
              <ButtonPrimarySmallOutlined>انصراف</ButtonPrimarySmallOutlined>
              <ButtonPrimarySmallFilled>ذخیره تغییرات</ButtonPrimarySmallFilled>
            </Box>
          </Box>
        </MainContainer>
      </SectionContainer>
    </Box>
  );
}
