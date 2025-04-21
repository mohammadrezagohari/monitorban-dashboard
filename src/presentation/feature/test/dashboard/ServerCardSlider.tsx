import { ArrowRightIcon } from "src/presentation/components/common/icons/ArrowRightIcon";
import { useRef } from "react";
import { ArrowLeftIcon } from "src/presentation/components/common/icons/ArrowLeftIcon";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ServerRoomCard from "../../server room dashboard card/ServerRoomCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";
import { Typography } from "@mui/material";
import ButtonPrimaryXxsmallOutlined from "../../buttons/ButtonPrimaryXxsmallOutlined";

const styleBox = {
  backgroundColor: "#111",
  margin: "50px 40px",
  borderRadius: "1rem",
  padding: "1rem",
};

const serverRoomItems = [
  {
    title: "معاونت درمان استیان مازندران",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 3,
    rack: 12,
  },
  {
    title: "دانشگاه علوم پزشکی",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 5,
    rack: 3,
  },
  {
    title: "دانشگاه پیامبر اعظم",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 8,
    rack: 9,
  },
  {
    title: "بیمارستان رازی",
    icon: <MobileIcon />,
    city: "قائمشهر",
    sensor: 6,
    rack: 4,
  },
  {
    title: "درمانگاه ولایت",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 5,
    rack: 10,
  },
  {
    title: "معاونت درمان",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 3,
    rack: 12,
  },
  {
    title: "دانشگاه علوم پزشکی",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 5,
    rack: 3,
  },
  {
    title: "دانشگاه پیامبر اعظم",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 8,
    rack: 9,
  },
  {
    title: "بیمارستان رازی",
    icon: <MobileIcon />,
    city: "قائمشهر",
    sensor: 6,
    rack: 4,
  },
  {
    title: "درمانگاه ولایت",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 5,
    rack: 10,
  },
];

export default function ServerCardSlider() {
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <div
      style={{
        backgroundColor: "#111",
        margin: "20px 0px",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h3" style={{ color: "#D5D0DB" }}>
          اتاق سرور ها
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ButtonPrimaryXxsmallOutlined leftIcon={<ArrowLeftIcon />}>
            مشاهده همه
          </ButtonPrimaryXxsmallOutlined>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            ref={prevBtn}
          >
            <ArrowRightIcon color="#D5D0DB" />
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            ref={nextBtn}
          >
            <ArrowLeftIcon color="#D5D0DB" />
          </button>
        </div>
      </div>
      <div style={{ margin: "20px 0" }}>
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          onBeforeInit={(swiper : SwiperClass) => {
            if(swiper.params.navigation){
                if (typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.nextEl = nextBtn.current;
                  swiper.params.navigation.prevEl = prevBtn.current;
                }
            }
          }}
          freeMode={{ enabled: true }}
          scrollbar={{ draggable: true }}
          // pagination={{ clickable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
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
      </div>
    </div>
  );
}
