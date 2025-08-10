import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import { IUser } from "./IUsers";
import UsersList from "./UsersList";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { usersInfo } from "src/presentation/data/data";
import FilterOperation from "./FilterOperation";
import { StyledUsersContainer } from "./Users.styles";
import { IconButtonWithBorder } from "src/presentation/components/common/IconButtonWithBorder";

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
          <IconButtonWithBorder onClick={() => {}}>
            <PlusIcon color={theme.palette.primary.dark} size={16} />
          </IconButtonWithBorder>
        )}
      </PageTitle>

      <StyledUsersContainer>
        <FilterOperation />

        <UsersList users={usersList} />
      </StyledUsersContainer>
    </>
  );
}
