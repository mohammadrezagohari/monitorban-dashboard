import { Box } from "@mui/material";
import { cloneElement, ReactElement, ReactNode, useState } from "react";

import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import Button from "@/presentation/components/common/buttons/Button";
import UserInfo from "./UserInfo-v1";
import SecurityInfo from "./SecurityInfo";
import { ButtonsContainer, StyledUserPageContainer } from "./UserPage.styles";
import UserRoles from "./UserRoles";
import UserGroups from "./UserGroups";
import UserAccessibility from "./UserAccessibility";
import { FormProvider, useForm } from "react-hook-form";
import { User, UserFormData, UserFormProps } from "./IUserPage";

interface UserProfileFormProps {
  userData: User;
  // onSave: (data: UserFormData) => void;
  // saveButton: ReactNode;
}

export default function UserPage({
  user,
  onSave,
  saveButton,
  mode,
}: UserFormProps) {
  const methods = useForm({
    defaultValues: user ?? {},
  });

  const handleFormSubmit = methods.handleSubmit(onSave);

  // const [userRoles, setUserRoles] = useState(user.roles);
  // const [userGroups, setUserGroups] = useState(user.groups);

  // const handleRolesDelete = (role: string) => {
  //   console.log(role);
  //   setUserRoles((prevRoles: string[]) =>
  //     prevRoles.filter((item: string) => item !== role)
  //   );
  // };
  // const handleGroupsDelete = (group: string) => {
  //   console.log(group);
  //   setUserGroups((prevGroups: string[]) =>
  //     prevGroups.filter((item: string) => item !== group)
  //   );
  // };

  // const submitForm = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <FormProvider {...methods}>
        <PageTitle title="صفحه کاربر">
          <ButtonsContainer>
            <Button variant="outlined" size="small" colorType="primary">
              انصراف
            </Button>
            {cloneElement(saveButton as ReactElement, {
              onClick: handleFormSubmit,
            })}
            {/* <Button variant="contained" size="small" colorType="primary">
              ذخیره تغییرات
            </Button> */}
          </ButtonsContainer>
        </PageTitle>

        <StyledUserPageContainer>
          <UserInfo
          // user={user}
          />

          {/* <SecurityInfo />

          <UserRoles
          // userRoles={userRoles}
          // handleRolesDelete={handleRolesDelete}
          />

          <UserGroups
          // userGroups={userGroups}
          // handleGroupsDelete={handleGroupsDelete}
          />

          <UserAccessibility /> */}
        </StyledUserPageContainer>
      </FormProvider>
    </>
  );
}
