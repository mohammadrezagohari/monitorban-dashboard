import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

import { useReducer, useState } from "react";
import {
  minimumRecordOptions,
  notifDurationOptions,
  notifTypeOptions,
  recordableChangesOptions,
  returnNotifToNormalOptions,
  sensorTypeFeatureOptions,
  serverRoomOptions,
  unitOptions,
} from "src/presentation/data/data";
import theme from "src/themes/theme";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { HouseIcon } from "src/presentation/assets/icons/HouseIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { initialSensorState, sensorFormReducer } from "./SensorReducerFunction";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import Button from "src/presentation/components/common/buttons/Button";
import { Controller, useForm } from "react-hook-form";
import FormRow from "src/presentation/components/common/input/FormRow";
import { StyledInput } from "src/presentation/components/common/input/Form.styles";
import Select from "src/presentation/components/common/select/Select";
import { useMoveBack } from "src/presentation/hooks/useMoveBack";
import { GridBox } from "src/presentation/components/common/GridBox";
import { Form } from "src/presentation/components/common/Form";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import Input from "src/presentation/components/common/input/Input";
import FileUpload from "src/presentation/components/common/file-upload/FileUpload";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";

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
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const { register, handleSubmit, formState, control, reset } = useForm();

  const { errors } = formState;

  const moveBack = useMoveBack();

  function onSubmit(data) {
    // e.preventDefault();
    console.log("Form is submited", data);
    // dispatch({ type: "RESET" });
  }

  function onError(errors) {
    console.log("Errors:: ", errors);
  }

  function onCancel() {
    reset();
    moveBack();
  }

  return (
    // <Box component="form" onSubmit={handleSubmit}>
    <>
      <PageTitle title="افزودن سنسور جدید">
        {isDesktop ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              size="small"
              colorType="primary"
              onClick={onCancel}
            >
              انصراف
            </Button>
            <Button
              variant="contained"
              size="small"
              colorType="primary"
              type="submit"
              onClick={handleSubmit(onSubmit, onError)}
            >
              ذخیره تغییرات
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              alignSelf: "end",
            }}
          >
            <Button variant="outlined" size="xxsmall" colorType="primary">
              انصراف
            </Button>
            <Button variant="contained" size="xxsmall" colorType="primary">
              ذخیره تغییرات
            </Button>
          </Box>
        )}
      </PageTitle>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
                        {...register("serverRoom")}
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
                        {...register("sensorType")}
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
                    name="notificationInterval"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
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
                    name="image"
                    control={control}
                    render={({ field: { value, onChange, ...field } }) => (
                      <FileUpload
                        onFileSelect={onChange}
                        label="عکس پروفایل"
                        initialImage={value}
                        accept=".jpg,.jpeg,.png"
                      />
                    )}
                  />
                </FormRow>
              </GridBox>
              {/* <Box mt={{ xs: 1.5, md: 2 }}>
                <Typography variant="body1" color="neutral.200" mb={0.5}>
                  آیکون
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    mr: 1.25,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      width: 90,
                    }}
                  >
                    <IconWrapper>
                      <HouseIcon color="#C9A8E5" />
                    </IconWrapper>
                    <Typography variant="body2" color="neutral.200">
                      عکس آیکون
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="xxsmall"
                      colorType="primary"
                    >
                      بارگذاری عکس
                    </Button>
                    <IconButtonWithBorder
                      color={theme.palette.error.main}
                      // sx={{
                      //   border: "1px solid #E8383B",
                      //   borderRadius: "10px",
                      //   p: "7px",
                      // }}
                    >
                      <DeleteIcon size={16} />
                    </IconButtonWithBorder>
                  </Box>
                </Box>
              </Box> */}
            </MainContainer>
          </SectionContainer>
        </Box>
      </Form>
    </>
    // </Box>
  );
};

export default AddNewSensor;
