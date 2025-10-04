import { Controller, useForm } from "react-hook-form";
import { Typography, useTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";

import Input from "src/presentation/components/common/input/Input";
import FormRow from "src/presentation/components/common/input/FormRow";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import FileUpload from "src/presentation/components/common/file-upload/FileUpload";
import { GridBox } from "src/presentation/components/common/GridBox";
import { FormSelect } from "src/presentation/components/common/select/FormSelect";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import {
  minimumRecordOptions,
  notifDurationOptions,
  notifTypeOptions,
  recordableChangesOptions,
  returnNotifToNormalOptions,
  sensorTypeFeatureOptions,
  unitOptions,
} from "src/presentation/data/data";

function CreateNewSensor() {
  const { control, handleSubmit, register } = useForm();
  const theme = useTheme();
  const [icon, setIcon] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setIcon(url);
    }
  };

  const handleDelete = () => {
    setIcon(null);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageTitle title="سنسورها" />

      <SectionContainer>
        <HeaderContainer>
          <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
            ویژگی های سنسور
          </Typography>
        </HeaderContainer>
        <MainContainer>
          <GridBox as="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <FormRow label="عنوان انگلیسی سنسور">
              <Input
                id="sensorTitleEnglish"
                placeholder="عنوان انگلیسی سنسور را وارد کنید"
              />
            </FormRow>

            <FormRow label="عنوان فارسی سرور">
              <Input
                id="sensorTitlePersian"
                placeholder="عنوان فارسی سنسور را وارد کنید"
              />
            </FormRow>

            <FormRow label="نوع سنسور">
              <Controller
                name="sensorTypeFeature"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="sensorTypeFeature"
                    options={sensorTypeFeatureOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک نوع سنسور را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="واحد اندازه گیری">
              <Controller
                name="sensorUnit"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="sensorUnit"
                    options={unitOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک واحد اندازه گیری را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="آدرس فیزیکی سنسور">
              <Input
                id="sensorAddress"
                placeholder="آدرس فیزیکی سنسور را وارد کنید"
              />
            </FormRow>

            <FormRow label="نوع اعلان">
              <Controller
                name="notificationType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="notificationType"
                    options={notifTypeOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک نوع اعلان را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="تعداد اعلان">
              <Input
                id="notificationNumber"
                placeholder="تعداد اعلان را وارد کنید"
              />
            </FormRow>

            <FormRow label="فواصل بین اعلان">
              <Controller
                name="notificationInterval"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="notificationInterval"
                    options={notifDurationOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک بازه را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="اعلان بازگشت به حالت نرمال">
              <Controller
                name="notificationInterval"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="notificationInterval"
                    options={returnNotifToNormalOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک حالت را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="تغییرات قابل ثبت">
              <Controller
                name="recordableChanges"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="recordableChanges"
                    options={recordableChangesOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک تغییر را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="حداقل ثبت روزانه">
              <Controller
                name="minimumDailyRecord"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormSelect
                    id="minimumDailyRecord"
                    options={minimumRecordOptions}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="یک گزینه را انتخاب کنید"
                  />
                )}
              />
            </FormRow>

            <FormRow label="بیشینه بحرانی">
              <Input
                id="maximumCritical"
                placeholder="بیشینه بحرانی را وارد کنید"
              />
            </FormRow>

            <FormRow label="کمینه بحرانی">
              <Input
                id="minimumCritical"
                placeholder="کمینه بحرانی را وارد کنید"
              />
            </FormRow>

            <FormRow label="بیشینه اخطار">
              <Input
                id="maximumWarning"
                placeholder="بیشینه بحرانی را وارد کنید"
              />
            </FormRow>

            <FormRow label="کمینه اخطار">
              <Input
                id="minimumWarning"
                placeholder="کمینه بحرانی را وارد کنید"
              />
            </FormRow>

            <FormRow label="آیکون">
              <Controller
                name="file"
                control={control}
                render={({ field: { value, onChange, ...field } }) => (
                  <FileUpload
                    label="عکس آیکون"
                    onFileSelect={onChange}
                    accept=".png, .jpg"
                  />
                )}
              />
            </FormRow>
          </GridBox>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default CreateNewSensor;
