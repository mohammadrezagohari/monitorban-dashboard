import { useTheme } from "@mui/material";

import UserManagementItem from "./components/user-management-item/UserManagementItem";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { GridBox } from "src/presentation/components/common/GridBox";
import { ListIcon } from "src/presentation/assets/icons/ListIcon";
import { TwoUserIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import { UserSquareIcon } from "src/presentation/assets/icons/UserSquareIcon";

function UsersManagementPage() {
  const theme = useTheme();

  return (
    <>
      <PageTitle title="مدیریت کاربران" />

      <SectionContainer>
        <MainContainer>
          <GridBox>
            <UserManagementItem
              title="کاربران"
              color="#9BD6B6"
              icon={
                <UserSquareIcon color={theme.palette.neutral[800]} size={24} />
              }
            />
            <UserManagementItem
              title="نقش ها"
              color="#D69BA9"
              icon={<ListIcon color={theme.palette.neutral[800]} size={24} />}
            />
            <UserManagementItem
              title="گروه ها"
              color="#9BAFD6"
              icon={
                <TwoUserIcon color={theme.palette.neutral[800]} size={24} />
              }
            />
          </GridBox>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default UsersManagementPage;
