import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Button from "src/presentation/components/common/buttons/Button";
import Divider from "src/presentation/components/common/divider/Divider";
import { ListIcon } from "src/presentation/assets/icons/ListIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { TwoUserIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import RoleAccessibility from "./RoleAccessibility";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import { ComplaintIcon } from "src/presentation/assets/icons/ComplaintIcon";
import { MessageEditIcon } from "src/presentation/assets/icons/MessageEditIcon";
import { HeaderContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import {
  ButtonsContainer,
  StyledMainContainer,
  StyledRoleCardContainer,
} from "../roles/RolesPage.styles";

export default function RoleCard({
  roleObj,
  onDeleteRole,
}: {
  roleObj: {
    id: string;
    title: string;
    serverRoom: string;
    accesses: string[];
  };
  onDeleteRole: () => void;
}) {
  const { title, serverRoom, accesses } = roleObj;
  const [visible, setVisible] = useState(false);
  //   const [deleteBackdrop, setDeleteBackdrop] = useState(false);

  function handleAccess() {
    setVisible((visible) => !visible);
  }

  return (
    <StyledRoleCardContainer>
      <HeaderContainer>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconWrapper sx={{ color: "neutral.100" }}>
            <ListIcon size={24} />
          </IconWrapper>
          <Typography variant="h4" color="neutral.main">
            {title}
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
          >
            ویرایش
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            startIcon={<TwoUserIcon size={20} />}
          >
            کاربران
          </Button>
          <Button
            variant="outlined"
            size="small"
            colorType="primary"
            startIcon={<ComplaintIcon size={20} />}
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
            onClick={handleAccess}
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
