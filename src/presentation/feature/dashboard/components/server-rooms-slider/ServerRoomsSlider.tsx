import { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import useServerRooms from "./useServerRooms";

import Button from "src/presentation/components/common/buttons/Button";
import { EyeIcon } from "src/presentation/assets/icons/EyeIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import ServerRoomCard from "src/presentation/components/common/server-room-dashboard-card/ServerRoomCard";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "src/presentation/assets/icons/ArrowRightIcon";
import { ButtonsContainer } from "./ServerRoomsSlider.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";

function ServerRoomsSlider() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);
  const { serverRoomItems, isLoading } = useServerRooms();

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
            <Box>
              <IconButton ref={prevBtn}>
                <ArrowRightIcon color={theme.palette.neutral[100]} />
              </IconButton>
              <IconButton ref={nextBtn}>
                <ArrowLeftIcon color={theme.palette.neutral[100]} />
              </IconButton>
            </Box>
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
          {isLoading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // height: "100%",
                color: "neutral.main",
              }}
            >
              در حال بارگیری ...
            </Box>
          )}
          {serverRoomItems &&
            serverRoomItems.map((item, i) => {
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
                    key={item.id}
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
