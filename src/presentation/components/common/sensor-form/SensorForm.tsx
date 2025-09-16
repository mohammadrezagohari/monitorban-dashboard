import { Controller, useForm } from "react-hook-form";
import { Typography, useTheme } from "@mui/material";

import Input from "src/presentation/components/common/input/Input";
import Select from "src/presentation/components/common/select/Select";
import FormRow from "src/presentation/components/common/input/FormRow";
import { GridBox } from "src/presentation/components/common/GridBox";
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
import Avatar from "../avatar/Avatar";
import { HouseIcon } from "src/presentation/assets/icons/HouseIcon";

function SensorForm({ sensor = {} }) {
  const { id: sensorId, ...sensorData } = sensor;
  const isCreateSection = !Boolean(sensorId);
  const theme = useTheme();
  const { control } = useForm({
    defaultValues: isCreateSection ? {} : sensorData,
  });

  return (
    <SectionContainer>
      <HeaderContainer>
        <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
          {isCreateSection ? "افزودن سنسور جدید" : "ویژگی های سنسور"}
        </Typography>
      </HeaderContainer>
      <MainContainer>
        {/* <Form> */}
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
            <Avatar src="">
              <HouseIcon color={theme.palette.primary[200]} />
            </Avatar>
          </FormRow>
        </GridBox>
        {/* </Form> */}

        {/* <Box mt={{ xs: 1.5, md: 2 }}>
          <Typography variant="body1" color="neutral.200" mb={0.5}>
            آیکون
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 6, mr: 1.25 }}>
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
              <Button variant="outlined" size="xxsmall" colorType="primary">
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
  );
}

export default SensorForm;
