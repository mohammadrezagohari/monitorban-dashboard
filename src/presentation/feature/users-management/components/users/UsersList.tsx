import { Box } from "@mui/material";

import UserInfoCard from "./user-card/UserInfoCard";
import { IUser } from "./IUsers";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

function UsersList({ users }: { users: IUser[] }) {
  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionTitle>لیست کاربران</SectionTitle>
      </HeaderContainer>
      <MainContainer>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {users.map((user, index) => (
            <UserInfoCard
              key={user.id}
              // avatar={user.image}
              // userName={user.fullName}
              // phone={user.phone}
              // roles={user.roles}
              // groups={user.groups}
              user={user}
            />
          ))}
        </Box>
      </MainContainer>
    </SectionContainer>
  );
}

export default UsersList;
