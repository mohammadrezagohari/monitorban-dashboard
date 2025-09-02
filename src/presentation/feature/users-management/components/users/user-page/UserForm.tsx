import { User } from "./IUserPage";
import SecurityInfo from "./SecurityInfo";
import UserAccessibility from "./UserAccessibility";
import UserGroups from "./UserGroups";
import UserInfo from "./UserInfo";
import { StyledUserPageContainer } from "./UserPage.styles";
import UserRoles from "./UserRoles";

export default function UserForm() {
  //   const { handleSubmit } = useFormContext();

  //   function handleFormSubmit(data) {
  //     console.log(data);
  //   }

  return (
    <StyledUserPageContainer>
      <UserInfo />
      <SecurityInfo />

      <UserRoles />

      <UserGroups />

      <UserAccessibility />
    </StyledUserPageContainer>
  );
}
