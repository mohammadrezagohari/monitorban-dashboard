import { ComplaintIcon } from "src/presentation/assets/icons/ComplaintIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { MessageEditIcon } from "src/presentation/assets/icons/MessageEditIcon";
import { MoreIcon } from "src/presentation/assets/icons/MoreIcon";
import { TwoUsersIcon } from "src/presentation/assets/icons/TwoUsersIcon";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  useTheme,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import Modal from "src/presentation/components/common/modal/Modal";
import DeleteConfirmBackdrop from "src/presentation/components/common/backdrop/DeleteConfirmBackdrop";
import { Menu } from "./OperationMenu.styles";
import { OperationMenuProps } from "./IOperationMenu";

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

  const handleClick = (event: {
    currentTarget: SetStateAction<HTMLElement | null>;
  }) => {
    setAnchorEl(event.currentTarget);
    console.log("Opened");
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log("Closed");
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
                <DeleteIcon size={20} />
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
            <MessageEditIcon size={20} />
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
            <TwoUsersIcon size={20} />
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
            <ComplaintIcon size={20} />
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
