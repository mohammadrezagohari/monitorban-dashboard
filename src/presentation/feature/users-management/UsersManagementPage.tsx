import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import LinearCard from "src/presentation/components/common/linear-card/LinearCard";
import { GridBox } from "src/presentation/components/common/GridBox";
import { ListIcon } from "src/presentation/assets/icons/ListIcon";
import { TwoUsersIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { UserSquareIcon } from "src/presentation/assets/icons/UserSquareIcon";

function UsersManagementPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <PageTitle title="مدیریت کاربران" />

      <SectionContainer>
        <MainContainer>
          <GridBox>
            <LinearCard
              color="#9BD6B6"
              icon={
                <UserSquareIcon color={theme.palette.neutral[800]} size={24} />
              }
              handleClick={() => navigate("users")}
            >
              کاربران
            </LinearCard>
            <LinearCard
              color="#D69BA9"
              icon={<ListIcon color={theme.palette.neutral[800]} size={24} />}
              handleClick={() => navigate("roles")}
            >
              نقش ها
            </LinearCard>
            <LinearCard
              color="#9BAFD6"
              icon={
                <TwoUsersIcon color={theme.palette.neutral[800]} size={24} />
              }
              handleClick={() => navigate("groups")}
            >
              گروه ها
            </LinearCard>
          </GridBox>
        </MainContainer>
      </SectionContainer>
    </>
  );
}

export default UsersManagementPage;
