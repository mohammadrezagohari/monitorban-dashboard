import { useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import RoleCard from "./roles-card/RoleCard";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import DeleteConfirmBackdrop from "src/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.styles";
import { useRolesPage } from "./useRolesPage";
import EmptyData from "src/presentation/components/common/empty-data/EmptyData";

export default function RolesPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // const [rolesList, setRolesList] = useState(rolesArray);
  const { isLoading, isError, rolesList } = useRolesPage();

  // const [backdropOpen, setBackdropOpen] = useState(false);
  // const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  // const [pendingDeleteTitle, setPendingDeleteTitle] = useState<string | null>(
  //   null
  // );

  // function handleDeleteRequest(id: string, roleName: string) {
  //   setPendingDeleteId(id);
  //   setPendingDeleteTitle(roleName);
  //   // setBackdropOpen(true);
  // }

  // function confirmDelete() {
  //   if (pendingDeleteId) {
  //     setRolesList((prevRoles) =>
  //       prevRoles.filter((role) => role.id !== pendingDeleteId)
  //     );
  //   }
  //   cancelDelete();
  // }

  // function cancelDelete() {
  //   // setBackdropOpen(false);
  //   setTimeout(() => {
  //     setPendingDeleteId(null);
  //     setPendingDeleteTitle(null);
  //   }, 100);
  // }

  if (isLoading) return <p>Is Loading...</p>;
  if (isError) return null;

  return (
    <>
      {/* Header and Create Button */}
      <PageTitle title="نقش ها">
        {isDesktop ? (
          <Button
            variant="contained"
            size="large"
            colorType="primary"
            startIcon={<PlusIcon size={24} />}
          >
            ایجاد نقش جدید
          </Button>
        ) : (
          <IconButton
            sx={{
              bgcolor: "primary.main",
              borderRadius: "10px",
              // width: 32,
              // height: 32,
            }}
          >
            <PlusIcon color={theme.palette.neutral.main} size={16} />
          </IconButton>
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
            <EmptyData label="نقش" />
          )}
        </MainContainer>
      </SectionContainer>

      {/* <DeleteConfirmBackdrop
        open={backdropOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        roleTitle={pendingDeleteTitle}
      /> */}
    </>
  );
}
