import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import ButtonPrimarySmallFilled from "../../buttons/ButtonPrimarySmallFilled";
import ButtonPrimarySmallOutlined from "../../buttons/ButtonPrimarySmallOutlined";
import ButtonPrimaryXxsmallOutlined from "../../buttons/ButtonPrimaryXxsmallOutlined";
import ButtonPrimaryXxsmallFilled from "../../buttons/ButtonPrimaryXxsmallFilled";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import BaseInput from "../../input/BaseInput";
import { useReducer } from "react";
import FormSelect from "src/presentation/components/common/select/FormSelect";
import {
  minimumRecordOptions,
  notifDurationOptions,
  notifTypeOptions,
  recordableChangesOptions,
  returnNotifToNormalOptions,
  sensorTypeFeatureOptions,
  sensorTypeOptions,
  serverRoomOptions,
  unitOptions,
} from "../data";
import theme from "src/themes/theme";
import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";
import { HouseIcon } from "src/presentation/components/common/icons/HouseIcon";
import { DeleteIcon } from "src/presentation/components/common/icons/DeleteIcon";
import { initialSensorState, sensorFormReducer } from "./SensorReducerFunction";

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

  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form is submited", state);
    dispatch({ type: "RESET" });
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { md: "center" },
          justifyContent: "space-between",
          mb: 2.5,
          gap: 2,
        }}
      >
        <Typography
          variant="h2"
          color="neutral.main"
          sx={{
            fontSize: { xs: 24, md: 32 },
          }}
        >
          افزودن سنسور جدید
        </Typography>
        {isDesktop ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ButtonPrimarySmallOutlined>انصراف</ButtonPrimarySmallOutlined>
            <ButtonPrimarySmallFilled type="submit" onClick={handleSubmit}>
              ذخیره تغییرات
            </ButtonPrimarySmallFilled>
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
            <ButtonPrimaryXxsmallOutlined>انصراف</ButtonPrimaryXxsmallOutlined>
            <ButtonPrimaryXxsmallFilled>
              ذخیره تغییرات
            </ButtonPrimaryXxsmallFilled>
          </Box>
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <SectionContainer>
          <HeaderContainer>
            <Typography
              variant="h3"
              color="neutral.main"
              lineHeight={1.6}
              sx={{
                fontSize: { xs: 18, md: 24 },
              }}
            >
              اطلاعات سنسور
            </Typography>
          </HeaderContainer>
          <MainContainer>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  md: "repeat(3, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
                alignItems: "center",
                gap: 2,
              }}
            >
              <BaseInput
                label="نام سنسور"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "SET_NAME", payload: e.target.value })
                }
              />

              <FormSelect
                label="اتاق سرور"
                value={state.server_room}
                onChange={(e) =>
                  dispatch({ type: "SET_SERVER_ROOM", payload: e.target.value })
                }
                options={serverRoomOptions}
                placeholder="یک اتاق سرور را انتخاب کنید"
              />
              <FormSelect
                label="نوع سنسور"
                value={state.sensor_type}
                onChange={(e) =>
                  dispatch({ type: "SET_SENSOR_TYPE", payload: e.target.value })
                }
                options={sensorTypeOptions}
                placeholder="یک نوع سنسور را انتخاب کنید"
              />
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
                gridTemplateColumns: {
                  md: "repeat(3, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <BaseInput
                label="عنوان انگلیسی سنسور"
                value={state.sensor_title_english}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SENSOR_TITLE_ENGLISH",
                    payload: e.target.value,
                  })
                }
              />
              <BaseInput
                label="عنوان فارسی سرور"
                value={state.sensor_title_persian}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SENSOR_TITLE_PERSIAN",
                    payload: e.target.value,
                  })
                }
              />
              <FormSelect
                label="نوع سنسور"
                value={state.sensor_type_feature}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SENSOR_TYPE_FEATURE",
                    payload: e.target.value,
                  })
                }
                options={sensorTypeFeatureOptions}
                placeholder="یک نوع سنسور را انتخاب کنید"
              />
              <FormSelect
                label="واحد اندازه گیری"
                value={state.unit}
                onChange={(e) =>
                  dispatch({ type: "SET_UNIT", payload: e.target.value })
                }
                options={unitOptions}
                placeholder="یک واحد اندازه گیری را انتخاب کنید"
              />
              <BaseInput
                label="آدرس فیزیکی سنسور"
                value={state.sensor_address}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SENSOR_ADDRESS",
                    payload: e.target.value,
                  })
                }
              />
              <FormSelect
                label="نوع اعلان"
                value={state.notification_type}
                onChange={(e) =>
                  dispatch({
                    type: "SET_NOTIFICATION_TYPE",
                    payload: e.target.value,
                  })
                }
                options={notifTypeOptions}
                placeholder="یک نوع اعلان را انتخاب کنید"
              />
              <BaseInput
                label="تعداد اعلان"
                value={state.notification_number}
                onChange={(e) =>
                  dispatch({
                    type: "SET_NOTIFICATION_NUMBER",
                    payload: e.target.value,
                  })
                }
              />
              <FormSelect
                label="فواصل بین اعلان"
                value={state.notification_interval}
                onChange={(e) =>
                  dispatch({
                    type: "SET_NOTIFICATION_INTERVAL",
                    payload: e.target.value,
                  })
                }
                options={notifDurationOptions}
                placeholder="یک بازه را انتخاب کنید"
              />
              <FormSelect
                label="اعلان بازگشت به حالت نرمال"
                value={state.return_to_normal_situation}
                onChange={(e) =>
                  dispatch({
                    type: "SET_RETURN_TO_NORMAL_SITUATION",
                    payload: e.target.value,
                  })
                }
                options={returnNotifToNormalOptions}
                placeholder="یک حالت را انتخاب کنید"
              />
              <FormSelect
                label="تغییرات قابل ثبت"
                value={state.recordable_changes}
                onChange={(e) =>
                  dispatch({
                    type: "SET_RECORDABLE_CHANGES",
                    payload: e.target.value,
                  })
                }
                options={recordableChangesOptions}
                placeholder="یک تغییر را انتخاب کنید"
              />
              <FormSelect
                label="حداقل ثبت روزانه"
                value={state.minimum_daily_record}
                onChange={(e) =>
                  dispatch({
                    type: "SET_MINIMUM_DAILY_RECORD",
                    payload: e.target.value,
                  })
                }
                options={minimumRecordOptions}
                placeholder="یک گزینه را انتخاب کنید"
              />
              <BaseInput
                label="بیشینه بحرانی"
                value={state.maximum_critical}
                onChange={(e) =>
                  dispatch({
                    type: "SET_MAXIMUM_CRITIAL",
                    payload: e.target.value,
                  })
                }
              />
              <BaseInput
                label="کمینه بحرانی"
                value={state.minimum_critical}
                onChange={(e) =>
                  dispatch({
                    type: "SET_MINIMUM_CRITIAL",
                    payload: e.target.value,
                  })
                }
              />
              <BaseInput
                label="بیشینه اخطار"
                value={state.maximum_warning}
                onChange={(e) =>
                  dispatch({
                    type: "SET_MAXIMUM_WARNING",
                    payload: e.target.value,
                  })
                }
              />
              <BaseInput
                label="کمینه اخطار"
                value={state.minimum_warning}
                onChange={(e) =>
                  dispatch({
                    type: "SET_MINIMUM_WARNING",
                    payload: e.target.value,
                  })
                }
              />
            </Box>
            <Box>
              <Typography variant="body1" color="neutral.200" mb={0.5}>
                آیکون
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 6, mr: 1.25 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    width: 90,
                  }}
                >
                  <IconWrapper bgcolor="#4D4259">
                    <HouseIcon color="#C9A8E5" />
                  </IconWrapper>
                  <Typography variant="body2" color="neutral.200">
                    عکس آیکون
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ButtonPrimaryXxsmallOutlined>
                    بارگذاری عکس
                  </ButtonPrimaryXxsmallOutlined>
                  <span
                    style={{
                      border: "1px solid #E8383B",
                      borderRadius: "10px",
                    }}
                  >
                    <IconButton>
                      <DeleteIcon size={16} color="#E8383B" />
                    </IconButton>
                  </span>
                </Box>
              </Box>
            </Box>
          </MainContainer>
        </SectionContainer>
      </Box>
    </Box>
  );
};

export default AddNewSensor;
