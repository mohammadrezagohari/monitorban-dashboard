import { SwiperSlide as StyledSwiperSlide } from "swiper/react";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import ServerRoomCard from "src/presentation/components/common/server-room-dashboard-card/ServerRoomCard";

function SwiperSlide({ item }) {
  const ItemIcon = iconsMap[item.icon as keyof typeof iconsMap];

  return (
    <StyledSwiperSlide style={{ width: "220px" }} key={item.id}>
      <ServerRoomCard
        title={item.title}
        icon={<ItemIcon color="primary.200" />}
        city={item.city}
        sensor={item.sensor}
        rack={item.rack}
        onHandleClick={() => console.log(item)}
      />
    </StyledSwiperSlide>
  );
}

export default SwiperSlide;
