import { Box } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import IconButton from "@/presentation/components/common/icon-button/IconButton";
import Button from "@/presentation/components/common/buttons/Button";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import { Form } from "@/presentation/components/common/Form";
import { GridBox } from "@/presentation/components/common/GridBox";
import FormRow from "@/presentation/components/common/input/FormRow";
import Input from "@/presentation/components/common/input/Input";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import Select from "@/presentation/components/common/select/Select";
import Tag from "@/presentation/components/common/tag/Tag";

function CreateRole() {
  const [accesses, setAccesses] = useState<string[]>([
    "مدیریت کاربران",
    "مدیریت منو",
    "مدیریت رنگ ها",
    "مدیریت کاربران",
    "مدیریت منو",
    "مدیریت رنگ ها",
    "مدیریت کاربران",
    "مدیریت منو",
    "مدیریت رنگ ها",
    "مدیریت کاربران",
    "مدیریت منو",
    "مدیریت رنگ ها",
    "مدیریت کاربران",
    "مدیریت منو",
    "مدیریت رنگ ها",
  ]);

  const { control } = useForm();

  function deleteAccess(access: string) {
    setAccesses((prevAccesses) =>
      prevAccesses.filter((item) => item !== access)
    );
  }

  return (
    <>
      <PageTitle title="ایجاد نقش">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button variant="outlined" size="small" colorType="primary">
            انصراف
          </Button>
          <Button variant="contained" size="small" colorType="primary">
            ذخیره
          </Button>
        </Box>
      </PageTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: 4 },
        }}
      >
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>اطلاعات نقش</SectionTitle>
          </HeaderContainer>

          <MainContainer>
            <Form>
              <GridBox>
                <FormRow label="نام نقش">
                  <Input id="roleName" />
                </FormRow>
                <FormRow label="نام نقش">
                  <Controller
                    name="serverRoom"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        id="serverRoom"
                        options={[]}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    )}
                  />
                </FormRow>
              </GridBox>
            </Form>
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>دسترسی های گروه</SectionTitle>
            <Button variant="outlined" size="small" colorType="primary">
              افزودن دسترسی
            </Button>
          </HeaderContainer>
          <MainContainer>
            {accesses.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {accesses.map((access, index) => (
                  <Tag key={index}>
                    <IconButton
                      iconName="close"
                      onClick={() => deleteAccess(access)}
                    />
                    {access}
                  </Tag>
                ))}
              </Box>
            ) : (
              // <Box sx={{ display: "flex", justifyContent: "center" }}>
              //   <Typography variant="body2" color="neutral.200">
              //     در حال حاضر هیچ دسترسی اضافه نشده است !
              //   </Typography>
              // </Box>
              <EmptyData label="دسترسی" />
            )}
          </MainContainer>
        </SectionContainer>
      </Box>
    </>
  );
}

export default CreateRole;
