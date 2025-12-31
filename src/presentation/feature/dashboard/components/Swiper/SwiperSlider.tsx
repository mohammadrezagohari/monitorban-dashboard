import { SwiperSlide as StyledSwiperSlide } from "swiper/react";

import ServerRoomCard from "src/presentation/components/common/server-room-dashboard-card/ServerRoomCard";

function SwiperSlide({ item }) {
  return (
    <StyledSwiperSlide style={{ width: "220px" }} key={item.id}>
      <ServerRoomCard
        title={item.title}
        icon={item.icon}
        city={item.city}
        sensor={item.sensor}
        rack={item.rack}
        onHandleClick={() => console.log(item)}
      />
    </StyledSwiperSlide>
  );
}

export default SwiperSlide;
