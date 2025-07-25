import { useState } from "react";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import UsersList from "./UsersList";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { usersInfo } from "src/presentation/data/data";
import FilterOperation from "./FilterOperation";
import { StyledUsersContainer } from "./Users.styles";
import { IUser } from "./IUsers";

export default function Users() {
  const [userRole, setUserRole] = useState("");
  const [usersList, setUsersList] = useState<IUser[]>(usersInfo);

  console.log(usersList);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <PageTitle title="کاربران">
        {isDesktop ? (
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            startIcon={<PlusIcon size={24} />}
          >
            ایجاد کاربر جدید
          </Button>
        ) : (
          <IconButton
            sx={{
              border: `1px solid ${theme.palette.primary.dark}`,
              borderRadius: "10px",
              p: "7px",
            }}
            onClick={() => {}}
          >
            <PlusIcon color={theme.palette.primary.dark} size={16} />
          </IconButton>
        )}
      </PageTitle>

      <StyledUsersContainer>
        <FilterOperation />

        <UsersList users={usersList} />
      </StyledUsersContainer>
    </>
  );
}
