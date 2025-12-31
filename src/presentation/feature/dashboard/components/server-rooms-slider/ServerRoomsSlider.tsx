import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useRef } from "react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import useServerRooms from "./useServerRooms";

import Button from "src/presentation/components/common/buttons/Button";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";
import { Icon } from "src/presentation/components/common/icons/components/Icon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import ServerRoomCard from "src/presentation/components/common/server-room-dashboard-card/ServerRoomCard";
import { ButtonsContainer } from "./ServerRoomsSlider.styles";

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
              leftIcon="arrowLeft"
              onClick={() => console.log("اتاق سرور ها")}
            >
              مشاهده همه
            </Button>
          ) : (
            <IconButtonWithBorder>
              <Icon
                name="eye"
                w={16}
                h={16}
                color={theme.palette.primary.dark}
              />
            </IconButtonWithBorder>
          )}

          {isDesktop && (
            <Box>
              {/* <IconButton ref={prevBtn}>
                <ArrowRightIcon color={theme.palette.neutral[100]} />
              </IconButton> */}
              <Icon
                name="arrowRight"
                ref={prevBtn}
                color={theme.palette.neutral[100]}
              />
              <IconButton ref={nextBtn}>
                <Icon name="arrowLeft" color={theme.palette.neutral[100]} />
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
            serverRoomItems.map((item, i) => (
              <SwiperSlide style={{ width: "220px" }} key={i}>
                <ServerRoomCard
                  title={item.title}
                  icon={item.icon}
                  city={item.city}
                  sensor={item.sensor}
                  rack={item.rack}
                  onHandleClick={() => console.log(item)}
                  key={item.id}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </MainContainer>
    </SectionContainer>
  );
}

export default ServerRoomsSlider;
