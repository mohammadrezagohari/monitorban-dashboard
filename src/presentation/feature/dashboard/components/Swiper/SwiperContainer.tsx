import SwiperSlide from "./SwiperSlider";
import { serverRoomItems } from "@/presentation/data/data";
import { Swiper, SwiperClass } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

function SwiperContainer({ ...props }) {
  const { prevBtn, nextBtn } = props.navBtns;

  return (
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
        <SwiperSlide item={item} key={i} />
      ))}
    </Swiper>
  );
}

export default SwiperContainer;
