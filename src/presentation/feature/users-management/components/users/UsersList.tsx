import { Box } from "@mui/material";

import UserInfoCard from "./user-card/UserInfoCard";
import { IUser } from "./IUsers";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import useUsers from "./useUsers";

function UsersList() {
  const { isLoading, users, isError } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

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
