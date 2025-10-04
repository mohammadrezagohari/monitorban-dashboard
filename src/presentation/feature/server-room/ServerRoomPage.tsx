import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

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
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { useServerRoom } from "./useServerRoom";
import ListCard from "src/presentation/components/common/list-card/ListCard";
import Filter from "src/presentation/components/common/operations/Filter";
import { useRef, useState } from "react";
import { FilterIcon } from "src/presentation/assets/icons/FilterIcon";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";

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
            startIcon={<PlusIcon size={24} />}
          >
            ایجاد اتاق سرور جدید
          </Button>
        ) : (
          <IconButton
            sx={{
              bgcolor: "primary.main",
              borderRadius: "10px",
            }}
          >
            <PlusIcon color={theme.palette.neutral.main} size={16} />
          </IconButton>
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
              endIcon={
                isDesktop ? (
                  isFilterOpen ? (
                    <ArrowUpIcon size={24} />
                  ) : (
                    <ArrowDownIcon size={24} />
                  )
                ) : null
              }
              startIcon={<FilterIcon size={isDesktop ? 24 : 20} />}
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
