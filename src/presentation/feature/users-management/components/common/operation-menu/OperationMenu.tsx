import DeleteConfirmBackdrop from "@/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import { Icon } from "@/presentation/components/common/icons/components/Icon";
import Modal from "@/presentation/components/common/modal/Modal";
import { ListItemIcon, ListItemText, MenuItem, useTheme } from "@mui/material";
import React, { useState } from "react";
import { OperationMenuProps } from "./IOperationMenu";
import { Menu } from "./OperationMenu.styles";

export default function OperationMenu({
  title,
  onDelete,
  onEdit,
  showUsers,
  showAccesses,
}: OperationMenuProps) {
  const [ancholEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(ancholEl);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log("Opened");
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log("Closed");
  };

  return (
    <>
      <Icon
        name="more"
        color={theme.palette.neutral.main}
        onClick={handleClick}
      />
      <Menu anchorEl={ancholEl} open={open} onClose={handleClose}>
        <Modal>
          <Modal.Open opens="delete-role">
            <MenuItem
              onClick={() => {
                handleClose();
                onDelete();
              }}
            >
              <ListItemIcon
                sx={{
                  color: theme.palette.error.main,
                }}
              >
                <Icon name="delete" w={20} h={20} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: theme.palette.error.main,
                }}
              >
                حذف
              </ListItemText>
            </MenuItem>
          </Modal.Open>

          <Modal.Window name="delete-role">
            <DeleteConfirmBackdrop title={title} onConfirm={onDelete} />
          </Modal.Window>
        </Modal>
        <MenuItem onClick={onEdit}>
          <ListItemIcon
            sx={{
              color: theme.palette.success.main,
            }}
          >
            <Icon name="messageEdit" w={20} h={20} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.success.main,
            }}
          >
            ویرایش
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={showUsers}>
          <ListItemIcon
            sx={{
              color: theme.palette.primary.dark,
            }}
          >
            <Icon name="twoUsers" w={20} h={20} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.primary.dark,
            }}
          >
            کاربران
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={showAccesses}>
          <ListItemIcon
            sx={{
              color: theme.palette.primary.dark,
            }}
          >
            <Icon name="complaint" w={20} h={20} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.primary.dark,
            }}
          >
            دسترسی ها
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
