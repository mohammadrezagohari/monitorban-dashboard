import Tabs from "@/presentation/components/common/tabs/Tabs";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import { StyledRoleUsers } from "./RoleUsers.styles";
import RoleTabs from "./RoleTabs";

function RoleUsers() {
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <PageTitle title="کاربران" />

      <StyledRoleUsers>
        <RoleTabs />
        {/* <Tabs /> */}
      </StyledRoleUsers>
    </>
  );
}

export default RoleUsers;
