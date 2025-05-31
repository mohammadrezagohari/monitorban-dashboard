import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import {
  Backdrop,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ButtonPrimaryLargeFilled from "../../buttons/ButtonPrimaryLargeFilled";
import { PlusIcon } from "src/presentation/components/common/icons/PlusIcon";
import theme from "src/themes/theme";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";
import SectionTitle from "src/presentation/components/common/section-title/SectionTitle";
import { useState } from "react";
import { rolesArray } from "../data";
import RoleCard from "./RoleCard";
import ButtonPrimaryXsmallOutlined from "../../buttons/ButtonPrimaryXsmallOutlined";
import ButtonPrimaryXsmallFilled from "../../buttons/ButtonPrimaryXsmallFilled";

export default function RolesPage() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [rolesList, setRolesList] = useState(rolesArray);

  const [backdropOpen, setBackdropOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [pendingDeleteTitle, setPendingDeleteTitle] = useState<string | null>(
    null
  );

  function handleDeleteRequest(id: string, title: string) {
    setPendingDeleteId(id);
    setPendingDeleteTitle(title);
    setBackdropOpen(true);
  }

  function confirmDelete() {
    if (pendingDeleteId) {
      setRolesList((prevRoles) =>
        prevRoles.filter((role) => role.id !== pendingDeleteId)
      );
    }
    cancelDelete();
  }

  function cancelDelete() {
    setBackdropOpen(false);
    setTimeout(() => {
      setPendingDeleteId(null);
      setPendingDeleteTitle(null);
    }, 100);
  }

  //   function handleDeleteRole(id: string) {
  //     const isDeleted = confirm("Are you sure?");
  //     console.log(id);
  //     console.log(isDeleted);
  //     if (isDeleted) {
  //       setRolesList((prevRoles) => prevRoles.filter((role) => role.id !== id));
  //     }
  //   }

  return (
    <Box>
      {/* Header and Create Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <PageTitle>نقش ها</PageTitle>
        {isDesktop ? (
          <ButtonPrimaryLargeFilled rightIcon={<PlusIcon size={24} />}>
            ایجاد نقش جدید
          </ButtonPrimaryLargeFilled>
        ) : (
          <IconButton sx={{ bgcolor: "primary.main", borderRadius: "10px" }}>
            <PlusIcon color="#F7F5FA" size={16} />
          </IconButton>
        )}
      </Box>

      {/* Role Cards */}
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>لیست نقش ها</SectionTitle>
        </HeaderContainer>
        <MainContainer>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {rolesList.map((role) => (
              <RoleCard
                key={role.id}
                roleObj={role}
                onDeleteRole={() => handleDeleteRequest(role.id, role.title)}
                // title={role.title}
                // serverRoom={role.serverRoom}
                // accesses={role.accesses}
              />
            ))}
          </Box>
        </MainContainer>
      </SectionContainer>

      <DeleteConfirmBackdrop
        open={backdropOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        roleTitle={pendingDeleteTitle}
      />
    </Box>
  );
}

function DeleteConfirmBackdrop({
  open,
  onClose,
  onConfirm,
  roleTitle,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  roleTitle: string | null;
}) {
  return (
    <Backdrop
      sx={(theme) => ({
        color: "neutral.200",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
      onClick={onClose}
    >
      <Box
        sx={{
          p: 2,
          border: "1px solid #9B92A6",
          borderRadius: "25px",
          bgcolor: "#1C1926",
          minWidth: 350,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Typography variant="h3" sx={{ color: "warning.500", mb: 2 }}>
          هشدار!
        </Typography>
        <Typography variant="body1" sx={{ color: "neutral.200", mb: 3 }}>
          آیا از حذف نقش{" "}
          <Box component="span" sx={{ color: "primary.300" }}>
            "{roleTitle}"
          </Box>{" "}
          مطمئن هستید ؟
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <ButtonPrimaryXsmallOutlined onClick={onClose}>
            انصراف
          </ButtonPrimaryXsmallOutlined>
          <ButtonPrimaryXsmallFilled onClick={onConfirm}>
            تایید
          </ButtonPrimaryXsmallFilled>
        </Box>
      </Box>
    </Backdrop>
  );
}
