import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

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
} from "../RolesPage.styles";
import { useNavigate } from "react-router-dom";
import { MoreIcon } from "src/presentation/assets/icons/MoreIcon";
import Modal from "src/presentation/components/common/modal/Modal";
import DeleteConfirmBackdrop from "src/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import { useDeleteRole } from "./useDeleteRole";

export default function RoleCard({
  roleObj,
}: // onDeleteRole,
{
  roleObj: {
    id: string;
    title: string;
    serverRoom: string;
    accesses: string[];
  };
  // onDeleteRole: () => void;
}) {
  const { id, title: roleName, serverRoom, accesses } = roleObj;
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  //   const [deleteBackdrop, setDeleteBackdrop] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [pendingDeleteTitle, setPendingDeleteTitle] = useState<string | null>(
    null
  );
  const { isDeleting, deleteRole } = useDeleteRole();
  console.log("roleObj => ", roleObj);

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

  function handleDeleteRequest(id: string, roleName: string) {
    setPendingDeleteId(id);
    setPendingDeleteTitle(roleName);
    // setBackdropOpen(true);
  }

  // function confirmDelete() {
  //   if (pendingDeleteId) {
  //     setRolesList((prevRoles) =>
  //       prevRoles.filter((role) => role.id !== pendingDeleteId)
  //     );
  //   }
  //   cancelDelete();
  // }

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
          {isDesktop ? (
            <>
              <Modal>
                <Modal.Open opens="delete-role">
                  <Button
                    variant="outlined"
                    size="small"
                    colorType="error"
                    startIcon={<DeleteIcon size={20} />}
                    // onClick={onDeleteRole}
                    // onClick={() => setDeleteBackdrop(true)}
                  >
                    حذف
                  </Button>
                </Modal.Open>

                <Modal.Window name="delete-role">
                  <DeleteConfirmBackdrop
                    roleTitle={roleName}
                    onConfirm={() => deleteRole(id)}
                    disabled={isDeleting}
                  />
                  {/* <p>Modal</p> */}
                </Modal.Window>
              </Modal>

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
            </>
          ) : (
            // <IconButton
            //   sx={{
            //     position: "relative",
            //     top: -8,
            //     left: -8,
            //   }}
            // >
            //   <MoreIcon color={theme.palette.neutral.main} />
            // </IconButton>
            <MenuComp />
          )}
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

function MenuComp() {
  const [ancholEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(ancholEl);
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{
          position: "relative",
          top: -8,
          left: -8,
        }}
        onClick={handleClick}
      >
        <MoreIcon color={theme.palette.neutral.main} />
      </IconButton>
      <Menu anchorEl={ancholEl} open={open} onClose={handleClose}>
        <MenuItem>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText>One</ListItemText>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </Menu>
    </>
  );
}
