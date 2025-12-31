import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import IconButton from "src/presentation/components/common/icon-button/IconButton";
import { useNavigate } from "react-router-dom";
import Button from "src/presentation/components/common/buttons/Button";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { usersInfo } from "src/presentation/data/data";
import FilterOperation from "./FilterOperation";
import { IUser } from "./IUsers";
import { StyledUsersContainer } from "./Users.styles";
import UsersList from "./UsersList";

export default function Users() {
  const [userRole, setUserRole] = useState("");
  const [usersList, setUsersList] = useState<IUser[]>(usersInfo);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const handleAddButton = () => {
    navigate("add-new-user");
  };

  return (
    <>
      <PageTitle title="کاربران">
        {isDesktop ? (
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
