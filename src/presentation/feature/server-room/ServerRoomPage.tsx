import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import Button from "src/presentation/components/common/buttons/Button";
import RoomCard from "./components/room-card/RoomCard";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { CardsContainer } from "./ServerRoomPage.styles";
import { serverRoomItems } from "src/presentation/data/data";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

function ServerRoomPage() {
  return (
    <>
      <PageTitle title="اتاق سرور">
        <Button
          component={Link}
          to="/server-room/create-server-room"
          variant="contained"
          size="large"
          colorType="primary"
          startIcon={<PlusIcon size={24} />}
        >
          ایجاد اتاق سرور جدید
        </Button>
      </PageTitle>

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>لیست اتاق سرورها</SectionTitle>
        </HeaderContainer>

        <MainContainer>
          {/* TODO:: this Box will be changed */}
          <Box sx={{ mb: 2 }}>
            <Button variant="outlined" size="large" colorType="primary">
              فیلتر
            </Button>
          </Box>

          <CardsContainer>
            {serverRoomItems.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </CardsContainer>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default ServerRoomPage;
