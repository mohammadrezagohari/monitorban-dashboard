import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import DeleteConfirmBackdrop from "@/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import Button from "@/presentation/components/common/buttons/Button";
import Divider from "@/presentation/components/common/divider/Divider";
import { IconWrapper } from "@/presentation/components/common/icons/IconWrapper.style";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import Modal from "@/presentation/components/common/modal/Modal";
import { HeaderContainer } from "@/presentation/components/common/section-container/SectionContainer.styles";
import OperationMenu from "../../common/operation-menu/OperationMenu";
import {
  ButtonsContainer,
  StyledAccessesContainer,
  StyledMainContainer,
  StyledRoleCardContainer,
  StyledTitleBox,
} from "../RolesPage.styles";
import RoleAccessibility from "./RoleAccessibility";
import { useDeleteRole } from "./useDeleteRole";
import useScreenSize from "@/presentation/hooks/useScreenSize";

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
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  //   const [deleteBackdrop, setDeleteBackdrop] = useState(false);
  const theme = useTheme();
  const { isLargeScreen } = useScreenSize();
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [pendingDeleteTitle, setPendingDeleteTitle] = useState<string | null>(
    null
  );
  const { isDeleting, deleteRole } = useDeleteRole();
  console.log("roleObj => ", roleObj);

  function handleAccessToggle() {
    if (contentRef.current) {
      setContentHeight(!visible ? contentRef.current.scrollHeight : 0);
    }
    setVisible((visible) => !visible);
  }

  function handleEdit() {
    console.log("edit", id);
    navigate("edit-role", { state: { role: roleObj } });
  }

  function handleAccess() {
    navigate("access");
  }

  function handleUsers() {
    navigate("users");
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
        <StyledTitleBox>
          <IconWrapper>
            <Icon name="list" color={theme.palette.neutral[100]} />
          </IconWrapper>
          <Typography variant="h4" color="neutral.main">
            {roleName}
          </Typography>
        </StyledTitleBox>

        {/* Buttons */}
        <ButtonsContainer>
          {isLargeScreen ? (
            <>
              <Modal>
                <Modal.Open opens="delete-role">
                  <Button
                    variant="outlined"
                    size="small"
                    colorType="error"
                    rightIcon="delete"
                    // onClick={onDeleteRole}
                    // onClick={() => setDeleteBackdrop(true)}
                  >
                    حذف
                  </Button>
                </Modal.Open>

                <Modal.Window name="delete-role">
                  <DeleteConfirmBackdrop
                    title={roleName}
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
                rightIcon="messageEdit"
                onClick={handleEdit}
              >
                ویرایش
              </Button>

              <Button
                variant="outlined"
                size="small"
                colorType="primary"
                rightIcon="twoUsers"
                onClick={handleUsers}
              >
                کاربران
              </Button>

              <Button
                variant="outlined"
                size="small"
                colorType="primary"
                rightIcon="complaint"
                onClick={handleAccess}
              >
                دسترسی ها
              </Button>
            </>
          ) : (
            <OperationMenu
              title={roleName}
              onDelete={() => deleteRole(id)}
              onEdit={handleEdit}
              showUsers={handleUsers}
              showAccesses={handleAccess}
            />
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

        <Button
          variant="outlined"
          size="small"
          colorType="primary"
          onClick={handleAccessToggle}
          leftIcon={visible ? "arrowUp" : "arrowDown"}
        >
          مشاهده دسترسی ها
        </Button>
        <StyledAccessesContainer
          sx={{
            height: `${contentHeight}px`,
          }}
          ref={contentRef}
        >
          <RoleAccessibility accesses={accesses} />
        </StyledAccessesContainer>
      </StyledMainContainer>
    </StyledRoleCardContainer>
  );
}

// function MenuComp() {
//   const [ancholEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(ancholEl);
//   const theme = useTheme();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton
//         sx={{
//           position: "relative",
//           top: -8,
//           left: -8,
//         }}
//         onClick={handleClick}
//       >
//         <MoreIcon color={theme.palette.neutral.main} />
//       </IconButton>
//       <Menu
//         sx={{
//           "& .MuiPaper-root": {
//             width: 133,
//             borderRadius: "10px",
//             border: `1px solid ${theme.palette.neutral[300]}`,
//             backgroundColor: theme.palette.neutral[600],
//           },
//           "& .MuiButtonBase-root": {
//             display: "flex",
//             alignItems: "center",
//             gap: 0.5,
//             padding: theme.spacing(1, 1.5),
//             minHeight: 0,
//           },
//           "& .MuiTypography-root": {
//             ...theme.typography.body2,
//           },
//           "& .MuiListItemIcon-root": {
//             minWidth: 0,
//           },
//         }}
//         anchorEl={ancholEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem>
//           <ListItemIcon
//             sx={{
//               color: theme.palette.error.main,
//             }}
//           >
//             <DeleteIcon size={20} />
//           </ListItemIcon>
//           <ListItemText
//             sx={{
//               color: theme.palette.error.main,
//             }}
//           >
//             حذف
//           </ListItemText>
//           {/* <ListItemIcon>
//             <DeleteIcon />
//           </ListItemIcon> */}
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon
//             sx={{
//               color: theme.palette.success.main,
//             }}
//           >
//             <MessageEditIcon size={20} />
//           </ListItemIcon>
//           <ListItemText
//             sx={{
//               color: theme.palette.success.main,
//             }}
//           >
//             ویرایش
//           </ListItemText>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon
//             sx={{
//               color: theme.palette.primary.dark,
//             }}
//           >
//             <TwoUsersIcon size={20} />
//           </ListItemIcon>
//           <ListItemText
//             sx={{
//               color: theme.palette.primary.dark,
//             }}
//           >
//             کاربران
//           </ListItemText>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon
//             sx={{
//               color: theme.palette.primary.dark,
//             }}
//           >
//             <ComplaintIcon size={20} />
//           </ListItemIcon>
//           <ListItemText
//             sx={{
//               color: theme.palette.primary.dark,
//             }}
//           >
//             دسترسی ها
//           </ListItemText>
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }
