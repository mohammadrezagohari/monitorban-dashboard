import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { Box } from "@mui/material";
import ButtonPrimaryLargeFilled from "../../buttons/ButtonPrimaryLargeFilled";
import { PlusIcon } from "src/presentation/components/common/icons/PlusIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import BaseInput from "../../input/BaseInput";
import FormSelect from "src/presentation/components/common/select/FormSelect";
import { useState } from "react";
import ButtonPrimaryLargeOutlined from "../../buttons/ButtonPrimaryLargeOutlined";
import ServerRoomList from "../../sensor room list/ServerRoomListCard";
import { HouseIcon } from "src/presentation/components/common/icons/HouseIcon";
import UserCard from "./user-card/UserCard";
import { usersInfo } from "../data";

export default function Users() {
  const [userRole, setUserRole] = useState("");
  const [usersList, setUsersList] = useState(usersInfo);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <PageTitle>کاربران</PageTitle>
        <ButtonPrimaryLargeFilled rightIcon={<PlusIcon size={24} />}>
          ایجاد کاربر جدید
        </ButtonPrimaryLargeFilled>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>فیلتر</SectionTitle>
          </HeaderContainer>
          <MainContainer>
            <Box
              component="form"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                // justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr) auto",
                  alignItems: "flex-end",
                  gap: 2,
                }}
              >
                <BaseInput
                  label="نام کاربر"
                  // value=""
                  placeholder="نام کابر را وارد کنید"
                  // onChange={(e) =>
                  //   dispatch({ type: "SET_NAME", payload: e.target.value })
                  // }
                />
                <BaseInput
                  label="شماره تماس"
                  placeholder="شماره تماس را وارد کنید"
                  // onChange={(e) =>
                  //   dispatch({ type: "SET_NAME", payload: e.target.value })
                  // }
                />

                <FormSelect
                  label="نقش"
                  value={userRole}
                  // value={state.server_room}
                  onChange={(e) => setUserRole(e.target.value)}
                  options={[{ label: "نقش 1", value: "role1" }]}
                  placeholder="فیلتر بر اساس نقش"
                />
                <ButtonPrimaryLargeOutlined>انتخاب</ButtonPrimaryLargeOutlined>
              </Box>
            </Box>
          </MainContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderContainer>
            <SectionTitle>لیست کاربران</SectionTitle>
          </HeaderContainer>
          <MainContainer>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {usersList.map((user) => (
                <UserCard
                  key={user.fullName}
                  avatar={user.image}
                  userName={user.fullName}
                  phone={user.phone}
                  roles={user.roles}
                  groups={user.groups}
                />
              ))}
            </Box>
          </MainContainer>
        </SectionContainer>
      </Box>
    </Box>
  );
}
