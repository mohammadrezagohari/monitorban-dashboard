import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useRef, useState } from "react";
import Button from "@/presentation/components/common/buttons/Button";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import ListCard from "@/presentation/components/common/list-card/ListCard";
import Filter from "@/presentation/components/common/operations/Filter";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import { CardsContainer } from "./ServerRoomPage.styles";
import { useServerRoom } from "./useServerRoom";

const options = [
  { id: 1, value: "Item 1", label: "آیتم 1" },
  { id: 2, value: "Item 2", label: "آیتم 2" },
  { id: 3, value: "Item 3", label: "آیتم 3" },
];

function ServerRoomPage() {
  const { isLoading, serverRooms, isError } = useServerRoom();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const filterRef = useRef<HTMLButtonElement | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleEdit(room) {
    navigate(`/server-room/edit-server-room/${room.id}`, { state: { room } });
  }
  if (isError) return null;
  if (isLoading) return <p>Is Loading...</p>;

  return (
    <>
      <PageTitle title="اتاق سرور">
        {isDesktop ? (
          <Button
            component={Link}
            to="/server-room/create-server-room"
            variant="contained"
            size="large"
            colorType="primary"
            rightIcon="plus"
          >
            ایجاد اتاق سرور جدید
          </Button>
        ) : (
          <IconButton iconName="plus" />
        )}
      </PageTitle>

      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>لیست اتاق سرورها</SectionTitle>
        </HeaderContainer>

        <MainContainer>
          {/* TODO:: this Box will be changed */}
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              ref={filterRef}
              size="large"
              colorType="primary"
              onClick={() => setIsFilterOpen((o) => !o)}
              leftIcon={
                isDesktop ? (isFilterOpen ? "arrowUp" : "arrowDown") : null
              }
              rightIcon="filter"
            >
              فیلتر
            </Button>
            {isFilterOpen && (
              <Filter
                anchorRef={filterRef}
                options={options}
                onChange={() => console.log("changed")}
              />
            )}
          </Box>

          <CardsContainer>
            {serverRooms.map((room) => (
              // <RoomCard key={room.id} room={room} />
              <ListCard
                columns="2.5fr 0.7fr 3fr 1fr"
                item={{
                  caption: room.city,
                  secondDetailItems: room.sensors.map((s) => s.name),
                  ...room,
                }}
                key={room.id}
              >
                <ListCard.Title />

                <ListCard.ShowStatus />

                <ListCard.ShowSecondDetails label="سنسور ها" />

                <ListCard.Operations>
                  <Button
                    variant="outlined"
                    size={isDesktop ? "small" : "medium"}
                    colorType="error"
                  >
                    حذف
                  </Button>
                  <Button
                    variant="outlined"
                    size={isDesktop ? "small" : "medium"}
                    colorType="primary"
                    onClick={() => handleEdit(room)}
                  >
                    ویرایش
                  </Button>
                </ListCard.Operations>
              </ListCard>
            ))}
          </CardsContainer>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default ServerRoomPage;
