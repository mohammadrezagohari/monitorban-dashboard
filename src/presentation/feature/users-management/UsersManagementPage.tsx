import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { GridBox } from "@/presentation/components/common/GridBox";
import LinearCard from "@/presentation/components/common/linear-card/LinearCard";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";

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
              icon="userSquare"
              handleClick={() => navigate("users")}
            >
              کاربران
            </LinearCard>
            <LinearCard
              color="#D69BA9"
              icon="list"
              handleClick={() => navigate("roles")}
            >
              نقش ها
            </LinearCard>
            <LinearCard
              color="#9BAFD6"
              icon="twoUsers"
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
