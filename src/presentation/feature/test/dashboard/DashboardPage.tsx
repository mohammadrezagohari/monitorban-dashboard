import React from "react";
import {
  Box,
  IconButton,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import Map from "../Map";
import ServerRoomCard from "../../server room dashboard card/ServerRoomCard";
import SensorCard from "../../sensor-card/SensorCard";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { ArrowRightIcon } from "src/presentation/components/common/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "src/presentation/components/common/icons/ArrowLeftIcon";
import ButtonPrimaryXxsmallOutlined from "../../buttons/ButtonPrimaryXxsmallOutlined";
import {
  annouceSelectOptions,
  announceItemsInit,
  chartSelectOptions,
  sensorsItems,
  serverRoomItems,
  usersInfo,
} from "../data";
import Statistic from "./Statistic";
import UserCard from "../../user-card/UserCard";
import FilterSelect from "src/presentation/components/common/select/FilterSelect";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import CustomDivider from "src/presentation/components/common/divider/CustomDivider";
import { Eye } from "src/presentation/components/common/icons/Eye";
import BarChartjs from "./BarChartjs";

export default function Dashboard() {
  const [selectValue, setSelectValue] = useState("danger");
  const [chartSelectValue, setChartSelectValue] = useState("annual");
  const [status, setStatus] = useState("error");
  const [announceItems, setAnnounceItems] = useState(announceItemsInit);
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // function handleChange(val: SelectChangeEvent) {
  //   setStatus(val.target.value);
  //   console.log(val);
  // }

  useEffect(function () {
    // for get announce items from API. (setAnnounceItems)
  }, []);

  return (
    <Box>
      <Box mb={2.5}>
        <Typography variant="h2" color="neutral.main">
          داشبورد
        </Typography>
      </Box>

      {/* اعلانات و نقشه */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "100%",
          // width: "100%",
          // // maxWidth: 350,
          gap: { md: 3, xs: 2 },
          marginBottom: { xs: 3, md: 4 },
        }}
      >
        {/* Announcements */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: 350 },
          }}
        >
          <SectionContainer width="100%" height={334}>
            <HeaderContainer>
              {/* <Typography
              variant="h3"
              color="neutral.main"
              lineHeight={1.6}
              sx={{
                fontSize: { md: 24, xs: 18 },
              }}
            >
              اعلانات
            </Typography> */}
              <SectionTitle>اعلانات</SectionTitle>

              <Box width={85}>
                <FilterSelect
                  options={annouceSelectOptions}
                  value={selectValue}
                  setValue={setSelectValue}
                />
              </Box>
            </HeaderContainer>
            <MainContainer height="100%">
              <Box
                sx={{
                  overflow: "scroll",
                  height: "calc(100% - 55px)",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <ul style={{}}>
                  {announceItems.map((item, index) => (
                    <>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#373040",
                            borderRadius: "50%",
                            padding: "12px",
                            width: "48px",
                            height: "48px",
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <Typography variant="body1" sx={{ color: "#D5D0DB" }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#B7B0BF" }}>
                            {item.report}
                          </Typography>
                        </div>
                      </li>
                      {index !== announceItems.length - 1 && <CustomDivider />}
                    </>
                  ))}
                </ul>
              </Box>
            </MainContainer>
          </SectionContainer>
        </Box>
        {/* </Box> */}

        {/* Map */}
        <Box
          sx={{
            bgcolor: "#1C1926",
            borderRadius: "25px",
            padding: "1rem",
            width: "100%",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Map />
        </Box>
      </Box>

      {/* اتاق سرور  */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          gap: "24px",
          marginBottom: "2rem",
        }}
      >
        <SectionContainer width="100%" height="100%">
          <HeaderContainer>
            {/* <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
              اتاق سرور ها
            </Typography> */}
            <SectionTitle>اتاق سرور ها</SectionTitle>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {isDesktop ? (
                <ButtonPrimaryXxsmallOutlined
                  leftIcon={<ArrowLeftIcon />}
                  onClick={() => console.log("اتاق سرور ها")}
                >
                  مشاهده همه
                </ButtonPrimaryXxsmallOutlined>
              ) : (
                <IconButton
                  sx={{
                    border: `1px solid ${theme.palette.primary.dark}`,
                    borderRadius: "10px",
                  }}
                >
                  <Eye size={16} color={theme.palette.primary.dark} />
                </IconButton>
              )}
              {isDesktop && (
                <>
                  <IconButton
                    sx={{
                      bgColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    ref={prevBtn}
                  >
                    <ArrowRightIcon color="#D5D0DB" />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgColor: "transparent",
                      border: "none",
                      // cursor: "pointer",
                    }}
                    ref={nextBtn}
                  >
                    <ArrowLeftIcon color="#D5D0DB" />
                  </IconButton>
                </>
              )}
            </div>
          </HeaderContainer>
          <MainContainer>
            <Swiper
              modules={[Navigation, Pagination, FreeMode]}
              spaceBetween={16}
              slidesPerView="auto"
              navigation={{
                prevEl: prevBtn.current,
                nextEl: nextBtn.current,
              }}
              onBeforeInit={(swiper: SwiperClass) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.nextEl = nextBtn.current;
                  swiper.params.navigation.prevEl = prevBtn.current;
                }
              }}
              freeMode={{ enabled: true }}
              scrollbar={{ draggable: true }}
              // pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {serverRoomItems.map((item, i) => (
                <SwiperSlide style={{ width: "220px" }} key={i}>
                  <ServerRoomCard
                    title={item.title}
                    icon={item.icon}
                    city={item.city}
                    sensor={item.sensor}
                    rack={item.rack}
                    onHandleClick={() => console.log(item)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </MainContainer>
        </SectionContainer>
      </Box>

      {/* سنسورها و آخرین کاربران */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          height: "100%",
          width: "100%",
          gap: "16px 22px",
          // justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        {/* Sensors details */}
        <Box sx={{ gridRow: "1/3" }}>
          <SectionContainer width="100%" height="446px">
            <HeaderContainer>
              {/* <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
              سنسور ها
            </Typography> */}
              <SectionTitle>سنسورها</SectionTitle>

              {isDesktop ? (
                <ButtonPrimaryXxsmallOutlined
                  leftIcon={<ArrowLeftIcon />}
                  onClick={() => console.log("سنسورها")}
                >
                  مشاهده همه
                </ButtonPrimaryXxsmallOutlined>
              ) : (
                <IconButton
                  sx={{
                    border: `1px solid ${theme.palette.primary.dark}`,
                    borderRadius: "10px",
                  }}
                >
                  <Eye size={16} color={theme.palette.primary.dark} />
                </IconButton>
              )}
            </HeaderContainer>
            <MainContainer
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: "1rem",
                overflow: "scroll",
                height: "calc(100% - 55px)",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {/* <Box
              sx={{
                overflow: "scroll",
                height: "calc(100% - 55px)",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            > */}
              {sensorsItems.map((item, index) => (
                <SensorCard
                  key={index}
                  icon={item.icon}
                  title={item.name}
                  normalSensor={item.normalSensor}
                  warningSensor={item.warningSensor}
                  dangerSensor={item.dangerSensor}
                />
              ))}
              {/* </Box> */}
            </MainContainer>
          </SectionContainer>
        </Box>
        {/* Latest Users */}
        <Box>
          <SectionContainer width="100%" height={246}>
            <HeaderContainer>
              <SectionTitle>آخرین کاربران</SectionTitle>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {isDesktop ? (
                  <ButtonPrimaryXxsmallOutlined
                    leftIcon={<ArrowLeftIcon />}
                    onClick={() => console.log("آخرین کاربران")}
                  >
                    مشاهده همه
                  </ButtonPrimaryXxsmallOutlined>
                ) : (
                  <IconButton
                    sx={{
                      border: `1px solid ${theme.palette.primary.dark}`,
                      borderRadius: "10px",
                    }}
                  >
                    <Eye size={16} color={theme.palette.primary.dark} />
                  </IconButton>
                )}
              </div>
            </HeaderContainer>
            <MainContainer
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "repeat(2, 1fr)" },
                gap: "1rem",
                overflow: "scroll",
                height: "calc(100% - 55px)",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {usersInfo.map((item, index) => (
                <UserCard
                  key={index}
                  avatar={item.image}
                  fullName={item.fullName}
                  position={item.position}
                />
              ))}
            </MainContainer>
          </SectionContainer>
        </Box>

        {/* Statistic */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1.5, md: 2 },
          }}
        >
          <Statistic
            title="سنسور"
            value={145}
            isIncrese={true}
            diferentValue={3}
          />
          <Statistic
            title="کاربر"
            value={31}
            isIncrese={false}
            diferentValue={5}
          />
          <Statistic
            title="اتاق سرور"
            value={12}
            isIncrese={true}
            diferentValue={3}
          />
        </Box>
      </Box>
      {/* Bar Chart */}
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>نمودار دمای اتاق</SectionTitle>
          <FilterSelect
            options={chartSelectOptions}
            value={chartSelectValue}
            setValue={setChartSelectValue}
          />
        </HeaderContainer>
        <MainContainer>
          <BarChartjs />
        </MainContainer>
      </SectionContainer>
    </Box>
  );
}
