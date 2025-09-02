import Tabs from "src/presentation/components/common/tabs/Tabs";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { StyledRoleUsers } from "./RoleUsers.styles";

function RoleUsers() {
  // const theme = useTheme();
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <PageTitle title="کاربران" />

      <StyledRoleUsers>
        {/* <RoleTabs /> */}
        <Tabs />
      </StyledRoleUsers>
    </>
  );
}

export default RoleUsers;
