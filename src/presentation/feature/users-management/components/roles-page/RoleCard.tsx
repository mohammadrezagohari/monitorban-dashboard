import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import Divider from "src/presentation/components/common/divider/Divider";
import { ListIcon } from "src/presentation/assets/icons/ListIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { TwoUsersIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import RoleAccessibility from "./RoleAccessibility";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { ComplaintIcon } from "src/presentation/assets/icons/ComplaintIcon";
import { MessageEditIcon } from "src/presentation/assets/icons/MessageEditIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import {
  ButtonsContainer,
  StyledMainContainer,
  StyledRoleCardContainer,
} from "../roles/RolesPage.styles";
import { useNavigate } from "react-router-dom";

export default function RoleCard({
  roleObj,
  onDeleteRole,
}: {
  roleObj: {
    id: string;
    roleName: string;
    serverRoom: string;
    accesses: string[];
  };
  onDeleteRole: () => void;
}) {
  const { id, roleName, serverRoom, accesses } = roleObj;
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  //   const [deleteBackdrop, setDeleteBackdrop] = useState(false);

  function handleAccessToggle() {
    setVisible((visible) => !visible);
  }

  function handleEdit() {
    console.log("edit", id);
    navigate("edit-role", { state: { role: roleObj } });
  }

  function handleAccess() {
    navigate("access");
  }

  return (
    <StyledRoleCardContainer>
      <HeaderContainer>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconWrapper sx={{ color: "neutral.100" }}>
            <ListIcon size={24} />
          </IconWrapper>
          <Typography variant="h4" color="neutral.main">
            {roleName}
          </Typography>
        </Box>

        {/* Buttons */}
        <ButtonsContainer>
          <Button
            variant="outlined"
            size="small"
            colorType="error"
            startIcon={<DeleteIcon size={20} />}
            onClick={onDeleteRole}
            // onClick={() => setDeleteBackdrop(true)}
          >
            حذف
          </Button>
          {/* <BackDrop open={deleteBackdrop} setOpen={setDeleteBackdrop} /> */}
          <Button
            variant="outlined"
            size="small"
            colorType="success"
            startIcon={<MessageEditIcon size={20} />}
            onClick={handleEdit}
          >
            ویرایش
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            startIcon={<TwoUsersIcon size={20} />}
            onClick={() => navigate("users")}
          >
            کاربران
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            startIcon={<ComplaintIcon size={20} />}
            onClick={handleAccess}
          >
            دسترسی ها
          </Button>
        </ButtonsContainer>
      </HeaderContainer>

      <Divider sx={{ marginBlock: 2 }} />

      <StyledMainContainer>
        <Box>
          <Typography variant="body2" color="neutral.200">
            اتاق سرور :
          </Typography>
          <Typography variant="body1" color="neutral.main">
            {serverRoom}
          </Typography>
        </Box>
        <Box sx={{ justifySelf: "end" }}>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            onClick={handleAccessToggle}
            endIcon={
              visible ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />
            }
          >
            مشاهده دسترسی ها
          </Button>
        </Box>
        {visible && <RoleAccessibility accesses={accesses} />}
      </StyledMainContainer>
    </StyledRoleCardContainer>
  );
}
