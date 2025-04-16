import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import {
  Box,
  IconButton,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import ButtonSecondaryXxsmallOutlined from "../../buttons/ButtonSecondaryXxsmallOutlined";
import Map from "../Map";
import ServerRoomCard from "../../server room dashboard card/ServerRoomCard";
import SensorCard from "../../sensor-card/SensorCard";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { ArrowRightIcon } from "src/presentation/components/common/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "src/presentation/components/common/icons/ArrowLeftIcon";
import ButtonPrimaryXxsmallOutlined from "../../buttons/ButtonPrimaryXxsmallOutlined";
import {
  announceItems,
  sensorsItems,
  serverRoomItems,
  usersInfo,
} from "../data";
import Statistic from "./Statistic";
import UserCard from "../../user-card/UserCard";

export const Divider = styled("hr")(({ theme }) => ({
  border: `1px solid ${theme.palette.text.disabled}`,
  // display: "block",
  margin: "8px 0",
}));

export default function Dashboard() {
  const [status, setStatus] = useState("error");

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  const color =
    status === "normal"
      ? { border: "#0FD36A", textColor: "#0FD36A", text: "نرمال" }
      : status === "warning"
      ? { border: "#E8383B", textColor: "#E8383B", text: "اخطار" }
      : { border: "#E8890C", textColor: "#F5C789", text: "بحرانی" };

  function handleChange(val: SelectChangeEvent) {
    setStatus(val.target.value);
    console.log(val);
  }
  return (
    <div>
      <Typography
        variant="h2"
        color="neutral.main"
        sx={{ marginBottom: "1rem" }}
      >
        داشبورد
      </Typography>

      {/* اعلانات و نقشه */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          gap: "24px",
          marginBottom: "2rem",
        }}
      >
        {/* Announcements */}
        <SectionContainer width={350} height={334}>
          <HeaderContainer>
            <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
              اعلانات
            </Typography>

            <ButtonSecondaryXxsmallOutlined //TODO:: should be changed by Select component
              leftIcon={<ArrowDownIcon color={color.textColor} size={16} />}
            >
              {color.text}
            </ButtonSecondaryXxsmallOutlined>
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
                    {console.log("index: ", index)}
                    {console.log("length::", announceItems.length)}
                    {index !== announceItems.length - 1 && <Divider />}
                  </>
                ))}
              </ul>
            </Box>
          </MainContainer>
        </SectionContainer>

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
            <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
              اتاق سرور ها
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ButtonPrimaryXxsmallOutlined
                leftIcon={<ArrowLeftIcon />}
                onClick={() => console.log("اتاق سرور ها")}
              >
                مشاهده همه
              </ButtonPrimaryXxsmallOutlined>
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
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== "boolean") {
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
          gridTemplateColumns: "1fr 1fr",
          height: "100%",
          width: "100%",
          gap: "22px",
          // justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <SectionContainer width="100%" height="446px">
          <HeaderContainer>
            <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
              سنسور ها
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ButtonPrimaryXxsmallOutlined
                leftIcon={<ArrowLeftIcon />}
                onClick={() => console.log("سنسورها")}
              >
                مشاهده همه
              </ButtonPrimaryXxsmallOutlined>
            </div>
          </HeaderContainer>
          <MainContainer
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
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
            {sensorsItems.map((item) => (
              <SensorCard
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

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          <div style={{ gridColumn: " 1/-1" }}>
            <SectionContainer width="100%" height={246}>
              <HeaderContainer>
                <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
                  آخرین کاربران
                </Typography>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <ButtonPrimaryXxsmallOutlined
                    leftIcon={<ArrowLeftIcon />}
                    onClick={() => console.log("آخرین کاربران")}
                  >
                    مشاهده همه
                  </ButtonPrimaryXxsmallOutlined>
                </div>
              </HeaderContainer>
              <MainContainer
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
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
                {usersInfo.map((item) => (
                  <UserCard
                    avatar={item.image}
                    fullName={item.fullName}
                    position={item.position}
                  />
                ))}
                {/* </Box> */}
              </MainContainer>
            </SectionContainer>
          </div>

          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              backgroundColor: "#1C1926",
              borderRadius: "25px",
            }}
          >
            <Typography variant="h3">سنسور</Typography>
            <Typography variant="h1">145</Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <ArrowUpIcon color="#D5D0DB" />
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <Typography variant="body2" color="#0FD36A">
                  +3
                </Typography>
                <Typography variant="body2" color="#B7B0BF">
                  اضافه شده
                </Typography>
              </div>
            </div>
          </div> */}
          {/* <SectionContainer width="100%" height={184}>
            <HeaderContainer>
              <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
                سنسور
              </Typography>
            </HeaderContainer>
            <MainContainer>
              <Typography variant="h1" color="#C480FF" lineHeight={1.6}>
                145
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <ArrowUpIcon color="#D5D0DB" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <Typography variant="body2" color="#0FD36A">
                    +3
                  </Typography>
                  <Typography variant="body2" color="#B7B0BF">
                    اضافه شده
                  </Typography>
                </div>
              </div>
            </MainContainer>
          </SectionContainer>
          <SectionContainer width="100%" height={184}>
            <HeaderContainer>
              <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
                کاربر
              </Typography>
            </HeaderContainer>
            <MainContainer>
              <Typography variant="h1" color="#C480FF" lineHeight={1.6}>
                31
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <ArrowDownIcon color="#D5D0DB" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <Typography variant="body2" color="#E8383B">
                    -5
                  </Typography>
                  <Typography variant="body2" color="#B7B0BF">
                    کم شده
                  </Typography>
                </div>
              </div>
            </MainContainer>
          </SectionContainer> */}
          {/* <SectionContainer width="100%" height={184}>
            <HeaderContainer>
              <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
                اتاق سرور
              </Typography>
            </HeaderContainer>
            <MainContainer>
              <Typography variant="h1" color="#C480FF" lineHeight={1.6}>
                12
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <ArrowUpIcon color="#D5D0DB" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <Typography variant="body2" color="#0FD36A">
                    +3
                  </Typography>
                  <Typography variant="body2" color="#B7B0BF">
                    اضافه شده
                  </Typography>
                </div>
              </div>
            </MainContainer>
          </SectionContainer> */}
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
        </div>
      </Box>

      {/* <Box margin="20px 0">
        <SensorCard
          icon={<MobileIcon />}
          title="سنسور دمای اتاق"
          normalSensor={5}
          warningSensor={5}
          dangerSensor={5}
        />
      </Box> */}
      {/* <div>
        <SensorCategoryCard
          icon={<MobileIcon />}
          title="سنسور دمای اتاق"
          normalSensor={5}
          warningSensor={5}
          dangerSensor={5}
        />
      </div> */}
      {/* <div style={{ backgroundColor: "orange" }}>text</div> */}
    </div>
  );
}
