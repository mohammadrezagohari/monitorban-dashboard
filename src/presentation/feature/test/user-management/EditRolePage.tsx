import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { Box, IconButton, Typography } from "@mui/material";
import ButtonPrimarySmallFilled from "../../buttons/ButtonPrimarySmallFilled";
import ButtonPrimarySmallOutlined from "../../buttons/ButtonPrimarySmallOutlined";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import BaseInput from "../../input/BaseInput";
import FormSelect from "src/presentation/components/common/select/FormSelect";
import { useState } from "react";
import { accessesTemplate, filterOptions } from "../data";
import { CloseIcon } from "src/presentation/components/common/icons/CloseIcon";

export default function EditRolePage() {
  const [select, setSelect] = useState("");
  const [accesses, setAccesses] = useState(accessesTemplate);

  const handleGroupsDelete = (selectedItem: string) => {
    console.log(selectedItem);
    setAccesses((prevItems: string[]) =>
      prevItems.filter((item: string) => item !== selectedItem)
    );
  };
  return (
    <Box>
      {/* Header and Submit Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <PageTitle>نقش ها</PageTitle>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ButtonPrimarySmallOutlined>انصراف</ButtonPrimarySmallOutlined>
          <ButtonPrimarySmallFilled>ذخیره تغییرات</ButtonPrimarySmallFilled>
        </Box>
      </Box>

      {/* Role Information and accesses */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>اطلاعات نقش</SectionTitle>
          </HeaderContainer>
          <MainContainer
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              alignItems: "center",
              gap: 2,
            }}
          >
            <BaseInput label="نام نقش" />
            <FormSelect
              label="اتاق سرور"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              options={filterOptions}
            />
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>دسترسی ها</SectionTitle>
            <ButtonPrimarySmallOutlined>
              افزودن دسترسی
            </ButtonPrimarySmallOutlined>
          </HeaderContainer>
          <MainContainer
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {accesses.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <IconButton
                  sx={{ p: 0, color: "inherit" }}
                  onClick={() => handleGroupsDelete(item)}
                >
                  <CloseIcon size={20} />
                </IconButton>
                {item}
              </Typography>
            ))}
          </MainContainer>
        </SectionContainer>
      </Box>
    </Box>
  );
}
