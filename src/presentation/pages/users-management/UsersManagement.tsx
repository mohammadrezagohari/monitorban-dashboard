import UsersManagementPage from "src/presentation/feature/users-management/UsersManagementPage";

// Should be deleted
import { groupsList, usersInfo } from "src/presentation/data/data";
import UserPage from "src/presentation/feature/users-management/components/users/user-page/UserPage";
import Users from "src/presentation/feature/users-management/components/users/Users";
import Input from "src/presentation/components/common/input/Input";
import { UserIcon } from "src/presentation/assets/icons/UserIcon";
import ChangePasswordPage from "src/presentation/feature/users-management/components/users/change-password/ChangePasswordPage";
import RolesPage from "src/presentation/feature/users-management/components/roles/RolesPage";
import EditRolePage from "src/presentation/feature/users-management/components/roles/edit-role-page/EditRolePage";
import AddAccesses from "src/presentation/feature/users-management/components/roles/add-accesses/AddAccesses";
// import UserCard from "src/presentation/feature/users-management/components/user-management-item/LinearCard";
import RoleUsers from "src/presentation/feature/users-management/components/roles/role-users/RoleUsers";
import CreateGroup from "src/presentation/feature/users-management/components/roles/create-group/CreateGroup";
import AccessesPage from "src/presentation/feature/users-management/components/roles/accesses/AccessesPage";
import CreateRole from "src/presentation/feature/users-management/components/roles/create-role/CreateRole";
import GroupsPage from "src/presentation/feature/users-management/components/groups/GroupsPage";
import EditGroupPage from "src/presentation/feature/users-management/components/groups/edit-group-page/EditGroupPage";
import AddMember from "src/presentation/feature/users-management/components/groups/add-member/AddMember";
import AddAccessGroup from "src/presentation/feature/users-management/components/groups/add-access-group/AddAccessGroup";

function UsersManagement() {
  return (
    <>
      <UsersManagementPage />

      {/* TODO ::  Should be deleted */}
      {/* <Users /> */}
      {/* <UserPage activedUser={usersInfo[0]} /> */}
      {/* <div style={{ display: "flex", gap: "1rem" }}>
        <Input id="password" type="password" icon />
        <Input id="text" type="text" icon={<UserIcon />} />
      </div> */}
      {/* <ChangePasswordPage /> */}
      {/* <RolesPage /> */}
      {/* <EditRolePage /> */}
      {/* <AddAccesses /> */}
      {/* <RoleUsers /> */}
      {/* <CreateGroup /> */}
      {/* <AccessesPage /> */}
      {/* <CreateRole /> */}
      {/* <GroupsPage /> */}
      {/* <EditGroupPage group={groupsList[0]} /> */}
      {/* <AddMember /> */}
      {/* <AddAccessGroup /> */}
    </>
  );
}

export default UsersManagement;
