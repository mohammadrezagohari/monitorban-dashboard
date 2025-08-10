import FormRow from "src/presentation/components/common/input/FormRow";
import { Form } from "src/presentation/components/common/Form";
import { GridBox } from "src/presentation/components/common/GridBox";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import Input from "src/presentation/components/common/input/Input";
import RadioInputGroup from "src/presentation/components/common/old/radio-input/RadioInputGroup";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, useTheme } from "@mui/material";
import { GalleryIcon } from "src/presentation/assets/icons/GalleryIcon";
import { VideoIcon } from "src/presentation/assets/icons/VideoIcon";
import Button from "src/presentation/components/common/buttons/Button";
import Dropzone from "src/presentation/components/common/dropzone/Dropzone";

function AddNewTutorial() {
  return (
    <>
      <PageTitle title="آموزش ها" />

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>افزودن آموزش جدید</SectionTitle>
        </HeaderContainer>

        <MainContainer>
          <Form>
            <GridBox>
              <FormRow label="عنوان آموزش">
                <Input id="title" />
              </FormRow>

              <FormRow label="نوع آموزش">
                <RadioInputGroup
                  row
                  options={[
                    { label: "متن", value: "text" },
                    { label: "ویدئو", value: "video" },
                  ]}
                />
              </FormRow>

              <FormRow label="تصویر کاور" gridColumn="1 / 2">
                <Dropzone type="image" />
              </FormRow>

              <FormRow label="آپلود فایل" gridColumn="2 / 4">
                <Dropzone type="video" />
              </FormRow>

              <FormRow label="محل قرار دادن محتوا" gridColumn="1/-1">
                <Typography
                  color="neutral.main"
                  sx={{
                    border: "1px solid #5B5266",
                    borderRadius: "15px",
                    height: 200,
                    padding: 2,
                  }}
                >
                  Text editor
                </Typography>
              </FormRow>

              <FormRow gridColumn="-1/-2">
                <Box sx={{ "& *": { justifySelf: "flex-end" } }}>
                  <Button variant="contained" size="large" colorType="primary">
                    افزودن آموزش
                  </Button>
                </Box>
              </FormRow>
            </GridBox>
          </Form>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default AddNewTutorial;


