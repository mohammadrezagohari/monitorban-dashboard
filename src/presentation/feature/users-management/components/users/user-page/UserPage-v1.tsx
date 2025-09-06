import { useState } from "react";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import Button from "src/presentation/components/common/buttons/Button";
import UserInfo from "./UserInfo-v1";
import SecurityInfo from "./SecurityInfo";
import { ButtonsContainer, StyledUserPageContainer } from "./UserPage.styles";
import UserRoles from "./UserRoles";
import UserGroups from "./UserGroups";
import UserAccessibility from "./UserAccessibility";

export default function UserPage({ activedUser }: { activedUser: any }) {
  const [userRoles, setUserRoles] = useState(activedUser.roles);
  const [userGroups, setUserGroups] = useState(activedUser.groups);

  const handleRolesDelete = (role: string) => {
    console.log(role);
    setUserRoles((prevRoles: string[]) =>
      prevRoles.filter((item: string) => item !== role)
    );
  };
  const handleGroupsDelete = (group: string) => {
    console.log(group);
    setUserGroups((prevGroups: string[]) =>
      prevGroups.filter((item: string) => item !== group)
    );
  };

  return (
    <>
      <PageTitle title="صفحه کاربر">
        <ButtonsContainer>
          <Button variant="outlined" size="small" colorType="primary">
            انصراف
          </Button>
          <Button variant="contained" size="small" colorType="primary">
            ذخیره تغییرات
          </Button>
        </ButtonsContainer>
      </PageTitle>

      <StyledUserPageContainer>
        <UserInfo activedUser={activedUser} />

        <SecurityInfo />

        <UserRoles
          userRoles={userRoles}
          handleRolesDelete={handleRolesDelete}
        />

        <UserGroups
          userGroups={userGroups}
          handleGroupsDelete={handleGroupsDelete}
        />

        <UserAccessibility />
      </StyledUserPageContainer>
    </>
  );
}
