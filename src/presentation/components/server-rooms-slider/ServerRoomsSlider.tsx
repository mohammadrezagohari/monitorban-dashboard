import { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "../common/buttons/Button";
import { EyeIcon } from "src/presentation/assets/icons/EyeIcon";
import SectionTitle from "../common/section-title/SectionTitle";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import ServerRoomCard from "src/presentation/components/common/server-room-dashboard-card/ServerRoomCard";
import SectionContainer from "../common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "src/presentation/assets/icons/ArrowRightIcon";
import { serverRoomItems } from "src/presentation/data/data";
import { ButtonsContainer } from "./ServerRoomsSlider.styles";
import {
  HeaderContainer,
  MainContainer,
} from "../common/section-container/SectionContainer.style";
import { IconButtonWithBorder } from "../common/IconButtonWithBorder";

function ServerRoomsSlider() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <SectionContainer width="100%" height="100%">
      <HeaderContainer>
        <SectionTitle>اتاق سرور ها</SectionTitle>
        <ButtonsContainer>
          {isDesktop ? (
            <Button
              variant="outlined"
              size="xxsmall"
              colorType="primary"
              endIcon={<ArrowLeftIcon size={16} />}
              onClick={() => console.log("اتاق سرور ها")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButtonWithBorder>
              <EyeIcon size={16} color={theme.palette.primary.dark} />
            </IconButtonWithBorder>
          )}
          {isDesktop && (
            <div>
              <IconButton
                sx={{
                  bgColor: "transparent",
                  border: "none",
                }}
                ref={prevBtn}
              >
                <ArrowRightIcon color="#D5D0DB" />
              </IconButton>
              <IconButton
                sx={{
                  bgColor: "transparent",
                  border: "none",
                }}
                ref={nextBtn}
              >
                <ArrowLeftIcon color="#D5D0DB" />
              </IconButton>
            </div>
          )}
        </ButtonsContainer>
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
        >
          {serverRoomItems.map((item, i) => {
            const ItemIcon = iconsMap[item.icon as keyof typeof iconsMap];
            return (
              <SwiperSlide style={{ width: "220px" }} key={i}>
                <ServerRoomCard
                  title={item.title}
                  icon={<ItemIcon color={theme.palette.primary[200]} />}
                  city={item.city}
                  sensor={item.sensor}
                  rack={item.rack}
                  onHandleClick={() => console.log(item)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MainContainer>
    </SectionContainer>
  );
}

export default ServerRoomsSlider;
