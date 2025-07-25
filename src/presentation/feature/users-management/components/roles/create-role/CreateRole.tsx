import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, IconButton, Typography } from "@mui/material";

import Tag from "src/presentation/components/common/tag/Tag";
import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { CloseIcon } from "src/presentation/assets/icons/CloseIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { Form } from "src/presentation/components/common/Form";
import { GridBox } from "src/presentation/components/common/GridBox";
import FormRow from "src/presentation/components/common/input/FormRow";
import Input from "src/presentation/components/common/input/Input";
import Select from "src/presentation/components/common/select/Select";

function CreateRole() {
  const [accesses, setAccesses] = useState<string[]>([]);

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
          <MainContainer
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {accesses.length > 0 ? (
              accesses.map((access, index) => (
                <Tag key={index}>
                  <IconButton
                    sx={{ p: 0, color: "inherit" }}
                    onClick={() => deleteAccess(access)}
                  >
                    <CloseIcon size={20} />
                  </IconButton>
                  {access}
                </Tag>
              ))
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="body2" color="neutral.200">
                  در حال حاضر هیچ دسترسی اضافه نشده است !
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" size="small" colorType="secondary">
                افزودن دسترسی
              </Button>
            </Box>
          </MainContainer>
        </SectionContainer>
      </Box>
    </>
  );
}

export default CreateRole;
