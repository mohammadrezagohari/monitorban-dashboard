import { useMediaQuery } from "@mui/material";
import { useReducer, useState } from "react";

import theme from "@/themes/theme";
import Input from "@/presentation/components/common/input/Input";
import Select from "@/presentation/components/common/select/Select";
import Button from "@/presentation/components/common/buttons/Button";
import FormRow from "@/presentation/components/common/input/FormRow";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import FileUpload from "@/presentation/components/common/file-upload/FileUpload";
import { GridBox } from "@/presentation/components/common/GridBox";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { useMoveBack } from "@/presentation/hooks/useMoveBack";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { Controller, useForm } from "react-hook-form";
import { initialSensorState, sensorFormReducer } from "./SensorReducerFunction";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import {
  minimumRecordOptions,
  notifDurationOptions,
  notifTypeOptions,
  recordableChangesOptions,
  returnNotifToNormalOptions,
  sensorTypeFeatureOptions,
  serverRoomOptions,
  unitOptions,
} from "@/presentation/data/data";
import { AddSensorButtonsContainer, Form } from "./Sensors.styles";
import { SensorFormValues } from "@/presentation/utils/types";

// image: undefined;
// maximumCritical: "";
// maximumWarning: "";
// minimumCritical: "";
// minimumDailyRecord: "";
// minimumWarning: "";
// notificationInterval: "";
// notificationNumber: "";
// notificationType: "";
// recordableChanges: "";
// sensorAddress: "";
// sensorName: "";
// sensorTitleEnglish: "";
// sensorTitlePersian: "";
// sensorType: "";
// sensorTypeFeature: "";
// sensorUnit: "";
// serverRoom: "";

const AddNewSensor = () => {
  // const [serverRoomValue, setServerRoomValue] = useState("");
  // const [sensorTypeValue, setSensorTypeValue] = useState("");
  // const [unitValue, setUnitValue] = useState("");
  // const [notifTypeValue, setNotifTypeValue] = useState("");
  // const [sensorTypeFeatureValue, setSensorTypeFeatureValue] = useState("");
  // const [notidDurationValue, setNotidDurationValue] = useState("");
  // const [returnNotifToNormalValue, setReturnNotifToNormalValue] = useState("");
  // const [recordableChangesValue, setRecordableChangesValue] = useState("");
  // const [minimumRecordValue, setMinimumRecordValue] = useState("");

  const [state, dispatch] = useReducer(sensorFormReducer, initialSensorState);

  const [selectValue, setSelectValue] = useState("");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { register, handleSubmit, formState, control, reset } =
    useForm<SensorFormValues>();

  const { errors } = formState;

  const moveBack = useMoveBack();

  function onSubmit(data: SensorFormValues) {
    // e.preventDefault();
    console.log("Form is submited", data);
    // dispatch({ type: "RESET" });
  }

  function onError(errors: any) {
    console.log("Errors:: ", errors);
  }

  function onCancel() {
    reset();
    moveBack();
  }

  return (
    // <Box component="form" onSubmit={handleSubmit}>
    <>
      <PageTitle className="column" title="افزودن سنسور جدید">
        <AddSensorButtonsContainer>
          <Button
            variant="outlined"
            size={isDesktop ? "small" : "xxsmall"}
            colorType="primary"
            onClick={onCancel}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            size={isDesktop ? "small" : "xxsmall"}
            colorType="primary"
            type="submit"
            onClick={handleSubmit(onSubmit, onError)}
          >
            ذخیره تغییرات
          </Button>
        </AddSensorButtonsContainer>
      </PageTitle>

      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>اطلاعات سنسور</SectionTitle>
          </HeaderContainer>
          <MainContainer>
            <GridBox>
              <FormRow
                label="نام سنسور"
                error={errors?.sensorName?.message as string}
              >
                <Input
                  id="sensorName"
                  placeholder="نام سنسور را وارد کنید"
                  {...register("sensorName")}
                />
              </FormRow>

              <FormRow
                label="اتاق سرور"
                error={errors?.serverRoom?.message as string}
              >
                <Controller
                  name="serverRoom"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      id="serverRoom"
                      options={serverRoomOptions}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder="یک اتاق سرور را انتخاب کنید"
                    />
                  )}
                />
              </FormRow>

              <FormRow
                label="نوع سنسور"
                error={errors?.sensorType?.message as string}
              >
                <Controller
                  name="sensorType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      id="sensorType"
                      options={serverRoomOptions}
                      value={field.value}
                      displayEmpty
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder="نوع سنسور را انتخاب کنید"
                    />
                  )}
                />
              </FormRow>
            </GridBox>
          </MainContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>ویژگی های سنسور</SectionTitle>
          </HeaderContainer>
          <MainContainer>
            <GridBox>
              <FormRow label="عنوان انگلیسی سنسور">
                <Input
                  id="sensorTitleEnglish"
                  placeholder="عنوان انگلیسی سنسور را وارد کنید"
                  {...register("sensorTitleEnglish")}
                />
              </FormRow>

              <FormRow label="عنوان فارسی سرور">
                <Input
                  id="sensorTitlePersian"
                  placeholder="عنوان فارسی سنسور را وارد کنید"
                  {...register("sensorTitlePersian")}
                />
              </FormRow>

              <FormRow label="نوع سنسور">
                <Controller
                  name="sensorTypeFeature"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
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
                    <Select
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
                  {...register("sensorAddress")}
                />
              </FormRow>

              <FormRow label="نوع اعلان">
                <Controller
                  name="notificationType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
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
                  {...register("notificationNumber")}
                />
              </FormRow>

              <FormRow label="فواصل بین اعلان">
                <Controller
                  name="notificationInterval"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
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
                  name="returnNotifToNormalOptions"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      id="returnNotifToNormalOptions"
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
                    <Select
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
                    <Select
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
                  {...register("maximumCritical")}
                />
              </FormRow>

              <FormRow label="کمینه بحرانی">
                <Input
                  id="minimumCritical"
                  placeholder="کمینه بحرانی را وارد کنید"
                  {...register("minimumCritical")}
                />
              </FormRow>

              <FormRow label="بیشینه اخطار">
                <Input
                  id="maximumWarning"
                  placeholder="بیشینه بحرانی را وارد کنید"
                  {...register("maximumWarning")}
                />
              </FormRow>

              <FormRow label="کمینه اخطار">
                <Input
                  id="minimumWarning"
                  placeholder="کمینه بحرانی را وارد کنید"
                  {...register("minimumWarning")}
                />
              </FormRow>

              <FormRow label="آیکون">
                <Controller
                  name="image"
                  control={control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <FileUpload
                      onFileSelect={onChange}
                      label="عکس پروفایل"
                      // TODO::
                      //@ts-ignore
                      initialImage={value}
                      accept=".jpg,.jpeg,.png"
                    />
                  )}
                />
              </FormRow>
            </GridBox>
          </MainContainer>
        </SectionContainer>
      </Form>
    </>
  );
};

export default AddNewSensor;
