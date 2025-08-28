import { FormProvider, useForm } from "react-hook-form";
import { StyledUserPageContainer } from "./UserPage.styles";
import UserInfo from "./UserInfo-v1";
import SecurityInfo from "./SecurityInfo";
import UserRoles from "./UserRoles";
import UserGroups from "./UserGroups";
import UserAccessibility from "./UserAccessibility";
import { UserFormData, UserFormProps } from "./IUserPage";

function CreateUserForm({ user, onSave, saveButton, mode }: UserFormProps) {
  const defaultUser: UserFormData = {
    fullName: "",
    phone: "",
    image: "",
    position: "",
    roles: [],
    groups: [],
    permissions: [],
  };

  const methods = useForm<UserFormData>({
    defaultValues: user
      ? {
          fullName: user.fullName,
          phone: user.phone,
          image: user.image,
          position: user.position,
          roles: user.roles,
          groups: user.groups,
          permissions: user.permissions,
        }
      : defaultUser,
  });

  const handleFormSubmit = methods.handleSubmit(onSave);

  return (
    <FormProvider {...methods}>
      <StyledUserPageContainer onSubmit={handleFormSubmit}>
        <UserInfo
        //  user={user}
        />

        <SecurityInfo />

        <UserRoles
        //   userRoles={userRoles}
        //   handleRolesDelete={handleRolesDelete}
        />

        <UserGroups
        //   userGroups={userGroups}
        //   handleGroupsDelete={handleGroupsDelete}
        />

        <UserAccessibility />
      </StyledUserPageContainer>
    </FormProvider>
  );
}

export default CreateUserForm;
