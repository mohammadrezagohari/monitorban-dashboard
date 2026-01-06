import { Box } from "@mui/material";

import Button from "@/presentation/components/common/buttons/Button";
import EmptyData from "@/presentation/components/common/empty-data/EmptyData";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import SectionContainer from "@/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "@/presentation/components/common/section-container/SectionContainer.styles";
import SectionTitle from "@/presentation/components/common/section-title/SectionTitle";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import RoleCard from "./roles-card/RoleCard";
import { useRolesPage } from "./useRolesPage";

export default function RolesPage() {
  const { isMediumScreen } = useScreenSize();

  const { isLoading, isError, rolesList } = useRolesPage();

  function handleCreateNewRole() {
    console.log("Added");
  }

  if (isLoading) return <p>Is Loading...</p>;
  if (isError) return null;

  return (
    <>
      {/* Header and Create Button */}
      <PageTitle title="نقش ها">
        {isMediumScreen ? (
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            rightIcon="plus"
            onClick={handleCreateNewRole}
          >
            ایجاد نقش جدید
          </Button>
        ) : (
          <IconButton iconName="plus" onClick={handleCreateNewRole} />
        )}
      </PageTitle>

      {/* Role Cards */}
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>لیست نقش ها</SectionTitle>
        </HeaderContainer>
        <MainContainer>
          {rolesList.length > 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {rolesList.map((role) => {
                console.log("role => ", role);
                return (
                  <RoleCard
                    key={role.id}
                    roleObj={role}
                    // onDeleteRole={() => handleDeleteRequest(role.id, role.roleName)}
                  />
                );
              })}
            </Box>
          ) : (
            <EmptyData label="نقش" handleClick={handleCreateNewRole} />
          )}
        </MainContainer>
      </SectionContainer>
    </>
  );
}
