import { useState } from "react";

import Button from "@/presentation/components/common/buttons/Button";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import { usersInfo } from "@/presentation/data/data";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { useNavigate } from "react-router-dom";
import FilterOperation from "./FilterOperation";
import { IUser } from "./IUsers";
import { StyledUsersContainer } from "./Users.styles";
import UsersList from "./UsersList";

export default function Users() {
  const [userRole, setUserRole] = useState("");
  const [usersList, setUsersList] = useState<IUser[]>(usersInfo);

  const { isMediumScreen } = useScreenSize();

  const navigate = useNavigate();

  const handleAddButton = () => {
    navigate("add-new-user");
  };

  return (
    <>
      <PageTitle title="کاربران">
        {isMediumScreen ? (
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            rightIcon="plus"
            onClick={handleAddButton}
          >
            ایجاد کاربر جدید
          </Button>
        ) : (
          <IconButton iconName="plus" onClick={() => {}} />
        )}
      </PageTitle>

      <StyledUsersContainer>
        <FilterOperation />

        <UsersList />
      </StyledUsersContainer>
    </>
  );
}
