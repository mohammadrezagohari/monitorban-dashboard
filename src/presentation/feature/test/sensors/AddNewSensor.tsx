import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { Box, Typography } from "@mui/material";
import ButtonPrimarySmallFilled from "../../buttons/ButtonPrimarySmallFilled";
import ButtonPrimarySmallOutlined from "../../buttons/ButtonPrimarySmallOutlined";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import BaseInput from "../../input/BaseInput";

const AddNewSensor = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2.5,
        }}
      >
        <Typography variant="h2" color="neutral.main">
          افزودن سنسور جدید
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <ButtonPrimarySmallOutlined>انصراف</ButtonPrimarySmallOutlined>
          <ButtonPrimarySmallFilled>ذخیره تغییرات</ButtonPrimarySmallFilled>
        </Box>
      </Box>
      <SectionContainer>
        <HeaderContainer>
          <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
            اطلاعات سنسور
          </Typography>
        </HeaderContainer>
        <MainContainer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              alignItems: "center",
              gap: 2,
            }}
          >
            <BaseInput label="نام سنسور" />
            <BaseInput label="اتاق سرور" />
            <BaseInput label="نوع سنسور" />
          </Box>
        </MainContainer>
      </SectionContainer>
      <SectionContainer>
        <HeaderContainer>
          <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
            ویژگی های سنسور
          </Typography>
        </HeaderContainer>
        <MainContainer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              alignItems: "center",
              gap: 2,
            }}
          >
            <BaseInput label="عنوان انگلیسی سنسور" />
            <BaseInput label="عنوان فارسی سرور" />
            <BaseInput label="نوع سنسور" />
            <BaseInput label="واحد اندازه گیری" />
            <BaseInput label="آدرس فیزیکی سنسور" />
            <BaseInput label="نوع اعلان" />
            <BaseInput label="تعداد اعلان" />
            <BaseInput label="فواصل بین اعلان" />
            <BaseInput label="اعلان بازگشت به حالت نرمال" />
            <BaseInput label="تغییرات قابل ثبت" />
            <BaseInput label="حداقل ثبت روزانه" />
            <BaseInput label="بیشینه بحرانی" />
            <BaseInput label="کمینه بحرانی" />
            <BaseInput label="بیشینه اخطار" />
            <BaseInput label="کمینه اخطار" />
          </Box>
        </MainContainer>
      </SectionContainer>
    </Box>
  );
};

export default AddNewSensor;
